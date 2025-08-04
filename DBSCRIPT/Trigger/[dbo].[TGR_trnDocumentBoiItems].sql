USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnDocumentBoiItems]    Script Date: 01/11/2024 5:47:41 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-------------------------
CREATE TRIGGER  [dbo].[TGR_trnDocumentBoiItems]   
 ON  [dbo].[trnDocumentBoiItems]   
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
						p.[trnDocumentBoiItemsID] = i.[trnDocumentBoiItemsID]	and 
						p.[trnDocumentID] = i.[trnDocumentID] and 
						p.[CargoName] = i.[CargoName] and 
						p.[NoOfPackages] = i.[NoOfPackages]and
						p.[NoOfPieces] = i.[NoOfPieces]and
						p.[Weight] = i.[Weight]and
						p.[GuiID] = i.[GuiID]and
						p.[FlagDeleted] = i.[FlagDeleted]   
						and P.[YearID] = i.[YearID]
						and p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID]   
						and p.[InvoiceNo] = i.[InvoiceNo]
						AND p.[SerialNo] = i.[SerialNo]   
						AND p.[InvoiceDate] = i.[InvoiceDate]   
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnDocumentBoiItems_History]
										   ([trnDocumentBoiItemsID]
										   ,[trnDocumentID]
										   ,[trnDocumentLotDetailsID]
										   ,[CargoName]
										   ,[NoOfPackages]
										   ,[NoOfPieces]
										   ,[Weight]
										   ,[GuiID]
										   ,[Flagdeleted]
										   ,[Createdby]
										   ,[CreatedDate]
										   ,[UpdatedBy]
										   ,[UpdatedDate]
										   ,[Caption]
										   ,[YearID]
										,InvoiceNo
										,SerialNo
										,InvoiceDate)
						SELECT [trnDocumentBoiItemsID]
										   ,[trnDocumentID]
										   ,[trnDocumentLotDetailsID]
										   ,[CargoName]
										   ,[NoOfPackages]
										   ,[NoOfPieces]
										   ,[Weight]
										   ,[GuiID]
										   ,[Flagdeleted]
										   ,[Createdby]
										   ,[CreatedDate]
										   ,[UpdatedBy]
										   ,[UpdatedDate]
										   ,@caption
										   ,[YearID]
										   ,InvoiceNo
										   ,SerialNo
										   ,InvoiceDate
										    FROM Inserted 
					END    
			END	


GO

ALTER TABLE [dbo].[trnDocumentBoiItems] ENABLE TRIGGER [TGR_trnDocumentBoiItems]
GO


