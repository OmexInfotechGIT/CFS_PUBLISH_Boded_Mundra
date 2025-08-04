USE [CFS_BONDED_WAREHOUSE]
GO
/****** Object:  Trigger [dbo].[TGR_trnExportCLP]    Script Date: 1/16/2024 11:17:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-------------------------
CREATE TRIGGER  [dbo].[TGR_trnExportCLP]
 ON  [dbo].[trnExportCLP]   
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   DECLARE @Deleted bit
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
		IF((select FlagDeleted FROM Inserted) = 1)
		BEGIN
			SET @Deleted = 1
		END
		ELSE
		BEGIN
			SET @Deleted = 0
		END
	END
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.[trnExportCLPID] = i.[trnExportCLPID]	
		and p.[TransactionType] = i.[TransactionType]
		and p.[ContNo] = i.[ContNo] 
		and p.[trnExportStufingWOContainerDetailsID] = i.[trnExportStufingWOContainerDetailsID] 
		and p.[ContSize] = i.[ContSize] 
		and p.[ContType] = i.[ContType] 
		and p.[VCNID] = i.[VCNID] 
		and p.[VCNNo] = i.[VCNNo] 
		and p.[VesselName] = i.[VesselName]
		and p.[VOYNo] = i.[VOYNo]
		and p.[CutoffDate] = i.[CutoffDate]
		and p.[AgentSealNo] = i.[AgentSealNo]
		and p.[CustomsSealNo] = i.[CustomsSealNo] 
		and p.[CLPBeginDateAndTime] = i.[CLPBeginDateAndTime] 
		and p.[CLPEndDateAndTime] = i.[CLPEndDateAndTime] 
		and p.[Contractor] = i.[Contractor] 
		and p.[ContractorID] = i.[ContractorID]
		and p.[Surveyor] = i.[Surveyor]
		and p.[SurveyorID] = i.[SurveyorID]
		and p.[CargoType] = i.[CargoType]
		and p.[CargoTypeID] = i.[CargoTypeID]
		and p.[ShortShipmentPackages] = i.[ShortShipmentPackages]
		and p.[ShortShipmentPieces] = i.[ShortShipmentPieces]
		and p.[ShortShipmentWeight] = i.[ShortShipmentWeight]
		and p.[Remarks] = i.[Remarks]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and p.[IsFinished] = i.[IsFinished]
		and p.[DeleteReason] = i.[DeleteReason]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExportCLP_History]
							([trnExportCLPID],[TransactionType],[ContNo],[trnExportStufingWOContainerDetailsID],[ContSize],[ContType],[VCNID], [VCNNo], [VesselName], [VOYNo],[CutoffDate]
							,[AgentSealNo],[CustomsSealNo],[CLPBeginDateAndTime],[CLPEndDateAndTime],[Contractor],[ContractorID],[Surveyor],[SurveyorID],[CargoType],[CargoTypeID]
							,[ShortShipmentPackages],[ShortShipmentPieces],[ShortShipmentWeight],[Remarks]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[IsFinished],[Caption],DeleteReason)
					SELECT [trnExportCLPID],[TransactionType],[ContNo],[trnExportStufingWOContainerDetailsID],[ContSize],[ContType],[VCNID], [VCNNo], [VesselName], [VOYNo], [CutoffDate]
							,[AgentSealNo],[CustomsSealNo],[CLPBeginDateAndTime],[CLPEndDateAndTime],[Contractor],[ContractorID],[Surveyor],[SurveyorID],[CargoType],[CargoTypeID]
							,[ShortShipmentPackages],[ShortShipmentPieces],[ShortShipmentWeight],[Remarks]
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[IsFinished],@Caption,DeleteReason FROM Inserted 
	END    


