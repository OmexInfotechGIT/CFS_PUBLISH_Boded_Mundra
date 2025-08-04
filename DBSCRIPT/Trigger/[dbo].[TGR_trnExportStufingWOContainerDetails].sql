USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnExportStufingWOContainerDetails]    Script Date: 1/16/2024 10:06:06 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[TGR_trnExportStufingWOContainerDetails]
 ON  [dbo].[trnExportStufingWOContainerDetails]   
 
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   
	IF EXISTS(SELECT * FROM Inserted)    
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
			BEGIN     
			IF NOT EXISTS (
				SELECT *             FROM Inserted p              
					JOIN Deleted AS i              ON 
						p.[trnExportStufingWOContainerDetailsID] = i.[trnExportStufingWOContainerDetailsID]	and 
						p.[trnExportStufingWOID] = i.[trnExportStufingWOID] and 
						p.[ContainerName] = i.[ContainerName] and 
						p.[trnEmptyContainerGateInDetailsID] = i.[trnEmptyContainerGateInDetailsID] and 
						p.[Size] = i.[Size] and 
						p.[Type] = i.[Type] and 
						p.[StuffingMode] = i.[StuffingMode] and  
						p.[NoOfPackageForContainer] = i.[NoOfPackageForContainer] and 
						p.[WeightForContainer] = i.[WeightForContainer] and 
						p.[NoOfPiecesForContainer] = i.[NoOfPiecesForContainer] and  
						p.[CLPStatus] = i.[CLPStatus] and 				
						p.[Flagdeleted] = i.[Flagdeleted] 
						 
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnExportStufingWOContainerDetails_History]
								([trnExportStufingWOContainerDetailsID],[trnExportStufingWOID],[ContainerName],[trnEmptyContainerGateInDetailsID],[Size],[Type],[StuffingMode]
								,[NoOfPackageForContainer],[WeightForContainer],[NoOfPiecesForContainer] ,[CLPStatus],[Flagdeleted],[Createdby],[CreatedDate]
								,[UpdatedBy],[UpdatedDate],[Caption])
						
						
						SELECT	[trnExportStufingWOContainerDetailsID],[trnExportStufingWOID],[ContainerName],[trnEmptyContainerGateInDetailsID],[Size],[Type],[StuffingMode] 
								,[NoOfPackageForContainer],[WeightForContainer],[NoOfPiecesForContainer] ,[CLPStatus],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy]
								,[UpdatedDate],@caption  FROM Inserted 
					END    
			END	


GO


