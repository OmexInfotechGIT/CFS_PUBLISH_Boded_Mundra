USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnCargoGateIn]    Script Date: 02/08/2024 11:35:13 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER TRIGGER  [dbo].[TGR_trnCargoGateIn]   
 ON  [dbo].[trnCargoGateIn]   
 
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   DECLARE @IsFinished Varchar(50)
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'  
	END
	SET @IsFinished = (select IsFinished from inserted) 
	IF(@IsFinished = 0 )
	BEGIN
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnCargoGateInID] = i.[trnCargoGateInID]			
		and p.[WorkOrderNo] = i.[WorkOrderNo] 
		and p.[WorkOrderID] = i.[WorkOrderID] 
		and p.[LocationFrom] = i.[LocationFrom] 
		and p.[LocationFromID] = i.[LocationFromID] 
		and p.[VehicleType] = i.[VehicleType] 
		and p.[TransporterID] = i.[TransporterID] 
		and p.[DriverID] = i.[DriverID] 
		and p.[Driver] = i.[Driver] 
		and p.[LicenceNo] = i.[LicenceNo] 
		and p.[MobileNo] = i.[MobileNo] 
		and p.[Address] = i.[Address] 
		and p.[DomesticContainerStatus] = i.[DomesticContainerStatus]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and P.[Createdby] = i.[Createdby]
		and P.[CreatedDate] = i.[CreatedDate]
		and P.[UpdatedBy] = i.[UpdatedBy]
		and P.[UpdatedDate] = i.[UpdatedDate]
		and P.[IsApproved] = i.[IsApproved]
		and P.[ApprovedDate] = i.[ApprovedDate]
		and P.[ApproveRemarks] = i.[ApproveRemarks]
		and P.[UnApproveRemarks] = i.[UnApproveRemarks]
		and P.[ApprovedDate] = i.[ApprovedDate]
		and P.[TruckNO] = i.[TruckNO]
		and P.[Transporter] = i.[Transporter]
		and P.[IsFinished] = i.[IsFinished]
		and P.[TransportationType] = i.[TransportationType]
		and P.[YearID] = i.[YearID]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoGateIn_History]
							([trnCargoGateInID],[WorkOrderNo],[WorkOrderID],[LocationFrom],[LocationFromID],[VehicleType]
							,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address],[DomesticContainerStatus]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[ApprovedDate],[TruckNO],[Transporter],[IsFinished])

					SELECT [trnCargoGateInID],[WorkOrderNo],[WorkOrderID],[LocationFrom],[LocationFromID],[VehicleType]
							,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address],[DomesticContainerStatus]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[ApprovedDate],[TruckNO],[Transporter],[IsFinished] FROM Inserted 
	END    
	END
	ELSE IF (EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnCargoGateInID] = i.[trnCargoGateInID]	
		WHERE (  p.[WorkOrderNo] <> i.[WorkOrderNo] 
		OR p.[WorkOrderID] <> i.[WorkOrderID] 
		OR p.[LocationFrom] <> i.[LocationFrom] 
		OR p.[LocationFromID] <> i.[LocationFromID] 
		OR p.[VehicleType] <> i.[VehicleType] 
		OR p.[TransporterID] <> i.[TransporterID] 
		OR p.[DriverID] <> i.[DriverID] 
		OR p.[Driver] <> i.[Driver] 
		OR p.[LicenceNo] <> i.[LicenceNo] 
		OR p.[MobileNo] <> i.[MobileNo] 
		OR p.[Address] <> i.[Address] 
		OR p.[DomesticContainerStatus] <> i.[DomesticContainerStatus]
		OR P.[IsApproved] <> i.[IsApproved]
		OR P.[ApprovedDate] <> i.[ApprovedDate]
		OR P.[ApproveRemarks] <> i.[ApproveRemarks]
		OR P.[UnApproveRemarks] <> i.[UnApproveRemarks]
		OR P.[ApprovedDate] <> i.[ApprovedDate]
		OR P.[TruckNO] <> i.[TruckNO]
		OR P.[Transporter] <> i.[Transporter]
		OR P.[TransportationType] <> i.[TransportationType])
	) )
	BEGIN
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoGateIn_History]
							([trnCargoGateInID],[WorkOrderNo],[WorkOrderID],[LocationFrom],[LocationFromID],[VehicleType]
							,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address],[DomesticContainerStatus]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[ApprovedDate],[TruckNO],[Transporter],[IsFinished],[IsApproved])

					SELECT [trnCargoGateInID],[WorkOrderNo],[WorkOrderID],[LocationFrom],[LocationFromID],[VehicleType]
							,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address],[DomesticContainerStatus]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[ApprovedDate],[TruckNO],[Transporter],[IsFinished],[IsApproved] FROM Inserted 
	END
	ELSE
	BEGIN
		IF (NOT EXISTS (SELECT * FROM Inserted p  
			JOIN Deleted AS i ON 
			p.[trnCargoGateInID] = i.[trnCargoGateInID]				
			and p.[WorkOrderNo] = i.[WorkOrderNo] 
			and p.[WorkOrderID] = i.[WorkOrderID] 
			and p.[LocationFrom] = i.[LocationFrom] 
			and p.[LocationFromID] = i.[LocationFromID] 
			and p.[VehicleType] = i.[VehicleType] 
			and p.[TransporterID] = i.[TransporterID] 
			and p.[DriverID] = i.[DriverID] 
			and p.[Driver] = i.[Driver] 
			and p.[LicenceNo] = i.[LicenceNo] 
			and p.[MobileNo] = i.[MobileNo] 
			and p.[Address] = i.[Address] 
			and p.[DomesticContainerStatus] = i.[DomesticContainerStatus]
			and P.[Flagdeleted] = i.[Flagdeleted]
			and P.[Createdby] = i.[Createdby]
			and P.[CreatedDate] = i.[CreatedDate]
			and P.[UpdatedBy] = i.[UpdatedBy]
			and P.[UpdatedDate] = i.[UpdatedDate]
			and P.[IsApproved] = i.[IsApproved]
			and P.[ApprovedDate] = i.[ApprovedDate]
			and P.[ApproveRemarks] = i.[ApproveRemarks]
			and P.[UnApproveRemarks] = i.[UnApproveRemarks]
			and P.[ApprovedDate] = i.[ApprovedDate]
			and P.[TruckNO] = i.[TruckNO]
			and P.[Transporter] = i.[Transporter]
			and P.[IsFinished] = i.[IsFinished]
			and P.[TransportationType] = i.[TransportationType]
			and p.[trnCargoGateInPrefix] = i.[trnCargoGateInPrefix]
			and p.[trnCargoGateInNo] = i.[trnCargoGateInNo]
		) and @Caption ='insert')   
		BEGIN       
			SET NOCOUNT ON;       
			INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoGateIn_History]
								([trnCargoGateInID],[WorkOrderNo],[WorkOrderID],[LocationFrom],[LocationFromID],[VehicleType]
								,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address],[DomesticContainerStatus]
								,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[ApprovedDate],[TruckNO],[Transporter]
								,[IsFinished],[trnCargoGateInNo],[trnCargoGateInPrefix],[YearID])

						SELECT [trnCargoGateInID],[WorkOrderNo],[WorkOrderID],[LocationFrom],[LocationFromID],[VehicleType]
								,[TransporterID],[DriverID],[Driver],[LicenceNo],[MobileNo],[Address],[DomesticContainerStatus]
								,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,[ApprovedDate],[TruckNO],[Transporter]
								,[IsFinished],[trnCargoGateInNo],[trnCargoGateInPrefix],[YearID] FROM Inserted 
		END 
		ELSE
			BEGIN
				IF NOT EXISTS (SELECT * FROM Inserted p
					JOIN Deleted AS i ON
					p.[trnCargoGateInID] = i.[trnCargoGateInID]
					and p.[trnCargoGateInPrefix] = i.[trnCargoGateInPrefix]
					and p.[trnCargoGateInNo] = i.[trnCargoGateInNo]
					and p.[IsFinished]=i.[IsFinished]
					and p.[Flagdeleted] =i.[Flagdeleted]
				)
				BEGIN
					SET NOCOUNT ON;  
					UPDATE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoGateIn_History] 
					SET   [trnCargoGateInPrefix] = inserted.[trnCargoGateInPrefix],
						  [trnCargoGateInNo] = inserted.[trnCargoGateInNo],
						  [IsFinished]=inserted.[IsFinished],
						  [Flagdeleted] =inserted.[Flagdeleted]
					FROM [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoGateIn_History]  
					INNER JOIN  inserted ON [trnCargoGateIn_History].[trnCargoGateInID] = inserted.[trnCargoGateInID]
				END
		END	
	END

GO

ALTER TABLE [dbo].[trnCargoGateIn] ENABLE TRIGGER [TGR_trnCargoGateIn]
GO


