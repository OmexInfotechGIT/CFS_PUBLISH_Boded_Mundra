USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnCargoTruckOutwardCumGatepass]    Script Date: 01/09/2024 12:00:44 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



ALTER TRIGGER  [dbo].[TGR_trnCargoTruckOutwardCumGatepass]   
 ON  [dbo].[trnCargoTruckOutwardCumGatepass]   
 
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
		p.[trnCargoTruckOutwardCumGatepassID] = i.[trnCargoTruckOutwardCumGatepassID]	
		and p.[trnCargoTruckOutwardCumGatepassPrefix] = i.[trnCargoTruckOutwardCumGatepassPrefix]
		and p.[trnCargoTruckOutwardCumGatepassNo] = i.[trnCargoTruckOutwardCumGatepassNo] 
		and p.[trnEmptyTruckGateInID] = i.[trnEmptyTruckGateInID] 
		and p.[TruckNo] = i.[TruckNo] 
		and p.[Surveyor] = i.[Surveyor] 
		and p.[SurveyorID] = i.[SurveyorID] 
		and p.[Contractor] = i.[Contractor] 
		and p.[ContractorID] = i.[ContractorID] 
		and  CAST(p.[BeginStuffDate] as date)  = CAST(i.[BeginStuffDate] as date) 
		and  CAST(p.[EndStuffDate] as date)  = CAST(i.[EndStuffDate] as date) 
		and P.[Flagdeleted] = i.[Flagdeleted]
		and p.[Remarks] = i.[Remarks]
		and p.[trnEmptyTruckGateInNo] = i.[trnEmptyTruckGateInNo]
		and p.[WorkOrderID] = i.[WorkOrderID]
		and p.[WorkOrderNo] = i.[WorkOrderNo]
		and p.[DomesticContainerStatus] = i.[DomesticContainerStatus]
		and p.[IsFinished] = i.[IsFinished] 
		and p.[IsApproved] = i.[IsApproved]
		and p.[ApproveRemarks] = i.[ApproveRemarks]
		and p.[UnApproveRemarks] = i.[UnApproveRemarks]
		and p.[ApprovedDate] = i.[ApprovedDate]
		and p.[YearID] = i.[YearID]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoTruckOutwardCumGatepass_History]
							([trnCargoTruckOutwardCumGatepassID],[trnCargoTruckOutwardCumGatepassPrefix],[trnCargoTruckOutwardCumGatepassNo],[TruckNo],[trnEmptyTruckGateInID]
						   ,[Surveyor],[SurveyorID],[Contractor],[ContractorID],[BeginStuffDate],[EndStuffDate],[Remarks],[Flagdeleted],[Createdby]
						   ,[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[trnEmptyTruckGateInNo],[WorkOrderID],[WorkOrderNo], [DomesticContainerStatus],[IsApproved],[ApproveRemarks],[UnApproveRemarks],[ApprovedDate],[IsFinished],[YearID])

					SELECT [trnCargoTruckOutwardCumGatepassID],[trnCargoTruckOutwardCumGatepassPrefix],[trnCargoTruckOutwardCumGatepassNo],[TruckNo],[trnEmptyTruckGateInID]
						   ,[Surveyor],[SurveyorID],[Contractor],[ContractorID],[BeginStuffDate],[EndStuffDate],[Remarks],[Flagdeleted],[Createdby]
						   ,[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[trnEmptyTruckGateInNo],[WorkOrderID],[WorkOrderNo], [DomesticContainerStatus],[IsApproved],[ApproveRemarks],[UnApproveRemarks],[ApprovedDate],[IsFinished],[YearID] FROM Inserted 
	END 
	
	IF(@IsFinished = 1 AND (SELECT IsFinished FROM Deleted) = 0)
	BEGIN
		UPDATE [CFS_BONDED_WAREHOUSE].[dbo].[trnTruckInfo] SET [Flagdeleted] = 1 WHERE [TruckNo] = (SELECT TOP 1 [TruckNo] FROM Inserted)
	END



GO

ALTER TABLE [dbo].[trnCargoTruckOutwardCumGatepass] ENABLE TRIGGER [TGR_trnCargoTruckOutwardCumGatepass]
GO


