USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnDocumentContainerForLot]    Script Date: 01/11/2024 5:57:36 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-------------------------
CREATE TRIGGER  [dbo].[TGR_trnDocumentContainerForLot]   
 ON  [dbo].[trnDocumentContainerForLot]   
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
		p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID]	
		and p.[trnDocumentContainerID] = i.[trnDocumentContainerID]
		and p.[trnDocumentID] = i.[trnDocumentID] 
		and p.[LotNo] = i.[LotNo] 
		and p.[ContLevel] = i.[ContLevel] 
		and p.[Packages] = i.[Packages] 
		and p.[Pieces] = i.[Pieces] 
		and p.[Weight] = i.[Weight] 
		and p.[GuiID] = i.[GuiID] 
		and p.[trnDocumentContainerForLotID] = i.[trnDocumentContainerForLotID] 
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnDocumentContainerForLot_History]
							([trnDocumentLotDetailsID],[trnDocumentContainerID],[trnDocumentID],[LotNo],[ContLevel],[Packages],[Pieces],[Weight]
							,[GuiID],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],trnDocumentContainerForLotID)
		SELECT [trnDocumentLotDetailsID],[trnDocumentContainerID],[trnDocumentID],[LotNo],[ContLevel],[Packages],[Pieces],[Weight],[GuiID]
          ,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption,trnDocumentContainerForLotID FROM Inserted 
	END    


GO

ALTER TABLE [dbo].[trnDocumentContainerForLot] ENABLE TRIGGER [TGR_trnDocumentContainerForLot]
GO


