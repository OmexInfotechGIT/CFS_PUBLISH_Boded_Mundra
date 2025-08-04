USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnExportStufingWOSBDetails]    Script Date: 1/16/2024 10:06:06 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[TGR_trnExportStufingWOSBDetails]
 ON  [dbo].[trnExportStufingWOSBDetails]   
 
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
						p.[trnExportStufingWOSBDetailsID] = i.[trnExportStufingWOSBDetailsID]	and 
						p.[trnExportStufingWOID] = i.[trnExportStufingWOID] and 
						p.[BOENo] = i.[BOENo] and 
						p.[BLNo] = i.[BLNo] and 
						p.[trnExportDocumentDeclarationLotDetailsID] = i.[trnExportDocumentDeclarationLotDetailsID] and 
						p.[NOOFPKGS] = i.[NOOFPKGS] and 
						p.[NOOFPIECES] = i.[NOOFPIECES] and  
						p.[WEIGHT] = i.[WEIGHT] and 
						p.[FOB] = i.[FOB] and 
						p.[POD] = i.[POD] and  						
						p.[Flagdeleted] = i.[Flagdeleted] 
						 
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnExportStufingWOSBDetails_History]
								([trnExportStufingWOSBDetailsID],[trnExportStufingWOID],[BOENo],[BLNo],[trnExportDocumentDeclarationLotDetailsID],[NOOFPKGS],[NOOFPIECES]
								,[WEIGHT],[FOB],[POD],[Flagdeleted],[Createdby],[CreatedDate]
								,[UpdatedBy],[UpdatedDate],[Caption])
						
						
						SELECT	[trnExportStufingWOSBDetailsID],[trnExportStufingWOID],[BOENo],[BLNo],[trnExportDocumentDeclarationLotDetailsID],[NOOFPKGS],[NOOFPIECES] 
								,[WEIGHT],[FOB],[POD],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy]
								,[UpdatedDate],@caption  FROM Inserted 
					END    
			END	


GO


