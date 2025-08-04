USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnExBondDocumentEntryDetails]    Script Date: 01/05/2024 3:51:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE TRIGGER  [dbo].[TGR_trnExBondDocumentEntryDetails]   
 ON  [dbo].[trnExBondDocumentEntryDetails]   
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
						p.[trnExBondDocumentEntryDetailsID] = i.[trnExBondDocumentEntryDetailsID]	and 
						p.[trnExBondDocumentEntryID] = i.[trnExBondDocumentEntryID] and 
						p.[ReleasedType] = i.[ReleasedType] and 
						p.[ExBondRefPrefix] = i.[ExBondRefPrefix]and
						p.[ExBondRefNo] = i.[ExBondRefNo]and
						p.[DocumentDateTime] = i.[DocumentDateTime]and
						p.[EXBOEOrSBNo] = i.[EXBOEOrSBNo] and 
						p.[EXBOEOrSBDate] = i.[EXBOEOrSBDate] and 
						p.[CHA] = i.[CHA] and 
						p.[CHAID] = i.[CHAID] and 
						p.[Forwarder] = i.[Forwarder] and 
						p.[ForwarderID] = i.[ForwarderID] and 
						p.[Importer] = i.[Importer] and 
						p.[ImporterID] = i.[ImporterID] and 
						p.[Consoler] = i.[Consoler] and 
						p.[ConsolerID] = i.[ConsolerID] and 
						p.[SBOrInvoiceNo] = i.[SBOrInvoiceNo] and 
						p.[SBOrInvoiceDate] = i.[SBOrInvoiceDate] and 
						p.[ReleasedPackages] = i.[ReleasedPackages] and 
						p.[ReleasedPieces] = i.[ReleasedPieces] and 
						p.[ReleasedWeight] = i.[ReleasedWeight] and 
						p.[ReExportReleasedArea] = i.[ReExportReleasedArea] and 
						p.[AssessableValue] = i.[AssessableValue] and 
						p.[Dutyvalue] = i.[Dutyvalue] and 
						p.[DutyChallanNo] = i.[DutyChallanNo] and 
						p.[DutyChallanDate] = i.[DutyChallanDate] and 
						p.[OOCNo] = i.[OOCNo] and 
						p.[OOCDate] = i.[OOCDate] and 
						p.[Remarks] = i.[Remarks] and 
						p.[EquipmentID] = i.[EquipmentID] and 
						p.[Equipment] = i.[Equipment] and 
						p.[Createdby] = i.[Createdby] and 
						p.[CreatedDate] = i.[CreatedDate] and 
						p.[UpdatedBy] = i.[UpdatedBy] and 
						p.[UpdatedDate] = i.[UpdatedDate] and 
						p.[FlagDeleted] = i.[FlagDeleted]   
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExBondDocumentEntryDetails_History]
										   ([trnExBondDocumentEntryDetailsID],[trnExBondDocumentEntryID],[ReleasedType],[ExBondRefPrefix]
											,[ExBondRefNo],[DocumentDateTime],[EXBOEOrSBNo],[EXBOEOrSBDate],[CHA],[CHAID],[Forwarder]
											,[ForwarderID],[Importer],[ImporterID],Consoler,ConsolerID,SBOrInvoiceNo,SBOrInvoiceDate,ReleasedPackages
											,ReleasedPieces,ReleasedWeight,ReExportReleasedArea,AssessableValue,Dutyvalue,DutyChallanNo,DutyChallanDate
											,OOCNo,OOCDate,Remarks,EquipmentID,Equipment,[Flagdeleted],[Createdby]
											,[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
									SELECT  [trnExBondDocumentEntryDetailsID],[trnExBondDocumentEntryID],[ReleasedType],[ExBondRefPrefix]
											,[ExBondRefNo],[DocumentDateTime],[EXBOEOrSBNo],[EXBOEOrSBDate],[CHA],[CHAID],[Forwarder]
											,[ForwarderID],[Importer],[ImporterID],Consoler,ConsolerID,SBOrInvoiceNo,SBOrInvoiceDate,ReleasedPackages
											,ReleasedPieces,ReleasedWeight,ReExportReleasedArea,AssessableValue,Dutyvalue,DutyChallanNo,DutyChallanDate
											,OOCNo,OOCDate,Remarks,EquipmentID,Equipment,[Flagdeleted],[Createdby]
											,[CreatedDate],[UpdatedBy],[UpdatedDate],@caption
										    FROM Inserted 
					END    
			END	


GO

ALTER TABLE [dbo].[trnExBondDocumentEntryDetails] ENABLE TRIGGER [TGR_trnExBondDocumentEntryDetails]
GO


