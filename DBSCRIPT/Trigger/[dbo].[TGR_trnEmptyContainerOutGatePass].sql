USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnEmptyContainerOutGatePass]    Script Date: 01/08/2024 6:37:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



CREATE TRIGGER  [dbo].[TGR_trnEmptyContainerOutGatePass]   
 ON  [dbo].[trnEmptyContainerOutGatePass]   
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   DECLARE @IsFinished BIT

   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
		
	END
	SET @IsFinished = (SELECT IsFinished FROM Inserted)

	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnEmptyContainerOutGatePassID] = i.[trnEmptyContainerOutGatePassID]	
		and p.[trnEmptyContainerOutGatePassPrefix]=i.[trnEmptyContainerOutGatePassPrefix]
		and p.[trnEmptyContainerOutGatePassNo]=i.[trnEmptyContainerOutGatePassNo]
		and p.[TransactionType] = i.[TransactionType]
		and p.[VehicleType] = i.[VehicleType] 
		and p.[TransporterID] = i.[TransporterID] 
		and p.[TruckNo] = i.[TruckNo]
		and p.[TruckID] = i.[TruckID]
		and p.[Transporter] = i.[Transporter]
		and p.[Driver] = i.[Driver] 
		and p.[DriverID]=i.[DriverID]
		and p.[LicenceNo] = i.[LicenceNo] 
		and p.[MobileNo] = i.[MobileNo] 
		and p.[Address] = i.[Address] 
		and P.[Flagdeleted] = i.[Flagdeleted]
		and P.[Createdby] = i.[Createdby]
		and P.[CreatedDate] = i.[CreatedDate]
		and P.[UpdatedBy] = i.[UpdatedBy]
		and P.[UpdatedDate] = i.[UpdatedDate]
		and P.[ApprovedDate] = i.[ApprovedDate]
		and p.[IsApproved] = i.[IsApproved]
		and P.[ApproveRemarks] = i.[ApproveRemarks]
		and p.[UnApproveRemarks] = i.[UnApproveRemarks]
		and p.[IsFinished] = i.[IsFinished]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnEmptyContainerOutGatePass_History]
							([trnEmptyContainerOutGatePassID],trnEmptyContainerOutGatePassPrefix,trnEmptyContainerOutGatePassNo,[TransactionType],[VehicleType], [TruckNo], [TruckID], [Transporter]
							,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[IsFinished],[Caption],[IsApproved], [ApproveRemarks], [UnApproveRemarks],ApprovedDate)
					SELECT [trnEmptyContainerOutGatePassID],trnEmptyContainerOutGatePassPrefix,trnEmptyContainerOutGatePassNo,[TransactionType],[VehicleType], [TruckNo], [TruckID], [Transporter]
							,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[IsFinished],@Caption,[IsApproved], [ApproveRemarks], [UnApproveRemarks],ApprovedDate FROM Inserted 
	END   
	
	IF(@IsFinished = 1 AND (SELECT Flagdeleted FROM Inserted) = 0)
	BEGIN
		UPDATE [CFS_BONDED_WAREHOUSE].[dbo].[trnTruckInfo] SET [Flagdeleted] = 1 WHERE [TruckNo] = (SELECT TOP 1 [TruckNo] FROM Inserted)
	END
	ELSE IF((SELECT Flagdeleted FROM Inserted) = 1)
	BEGIN
		UPDATE [CFS_BONDED_WAREHOUSE].[dbo].[trnTruckInfo] SET [Flagdeleted] = 0 WHERE [TruckNo] = (SELECT TOP 1 [TruckNo] FROM Inserted)
	END



GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePass] ENABLE TRIGGER [TGR_trnEmptyContainerOutGatePass]
GO


