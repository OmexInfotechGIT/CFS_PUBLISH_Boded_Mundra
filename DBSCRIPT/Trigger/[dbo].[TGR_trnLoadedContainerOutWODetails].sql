USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnLoadedContainerOutWODetails]    Script Date: 01/10/2024 3:19:11 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




-------------------------
CREATE TRIGGER  [dbo].[TGR_trnLoadedContainerOutWODetails]   
 ON  [dbo].[trnLoadedContainerOutWODetails]   
 
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  

   
   IF EXISTS(SELECT * FROM Inserted)  
   Begin
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    

	END
	
	IF NOT EXISTS (SELECT * FROM Inserted p  
		JOIN Deleted AS i ON 
		p.trnLoadedContainerOutWODetailsID = i.trnLoadedContainerOutWODetailsID	
		and p.trnLoadedContainerOutWOID = i.trnLoadedContainerOutWOID
		and p.ContNo = i.ContNo 
		and p.trnDocumentContainerID = i.trnDocumentContainerID 
		and p.Flagdeleted = i.Flagdeleted 
		and p.trnExBondDocumentEntryDetailsID = i.trnExBondDocumentEntryDetailsID
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnLoadedContainerOutWODetails_History]
							(trnLoadedContainerOutWODetailsID, trnLoadedContainerOutWOID, ContNo, trnDocumentContainerID, Flagdeleted, Createdby, CreatedDate, UpdatedBy, UpdatedDate, Caption,trnExBondDocumentEntryDetailsID)

					SELECT trnLoadedContainerOutWODetailsID, trnLoadedContainerOutWOID, ContNo, trnDocumentContainerID, Flagdeleted, Createdby, CreatedDate, UpdatedBy, UpdatedDate,@Caption,trnExBondDocumentEntryDetailsID FROM Inserted 
	END    
		 	 


GO

ALTER TABLE [dbo].[trnLoadedContainerOutWODetails] ENABLE TRIGGER [TGR_trnLoadedContainerOutWODetails]
GO


