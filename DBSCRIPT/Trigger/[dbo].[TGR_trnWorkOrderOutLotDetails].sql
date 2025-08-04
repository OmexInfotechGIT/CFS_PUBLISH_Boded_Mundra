
CREATE TRIGGER  [dbo].[TGR_trnWorkOrderOutLotDetails]   
 ON  [dbo].[trnWorkOrderOutLotDetails]   
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
		p.[trnWorkOrderOutLotDetailsID] = i.[trnWorkOrderOutLotDetailsID]
		and p.[TransactionType] = i.[TransactionType] 
		and p.trnDocumentNo = i.trnDocumentNo 
		and p.trnDocumentID = i.trnDocumentID 
		and p.[LotNo] = i.[LotNo] 
		and p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID] 
		and p.[WorkOrderPackages] = i.[WorkOrderPackages] 
		and p.[WorkOrderWeight] = i.[WorkOrderWeight]  
		and p.[WorkOrderPieces] = i.[WorkOrderPieces] 
		and p.[Flagdeleted] = i.[Flagdeleted] 
		and p.[EXBOENo] = i.[EXBOENo] 
		and p.[DocumentEXBOENo] = i.[DocumentEXBOENo] 

	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_Local_History].[dbo].[trnWorkOrderOutLotDetails_History]
							([trnWorkOrderOutLotDetailsID],[TransactionType],[trnDocumentNo],[trnDocumentID],[LotNo],[trnDocumentLotDetailsID],[WorkOrderPackages]
							   ,[WorkOrderWeight],[WorkOrderPieces],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption],[EXBOENo],[DocumentEXBOENo])
		SELECT [trnWorkOrderOutLotDetailsID],[TransactionType],trnDocumentNo,trnDocumentID,[LotNo],[trnDocumentLotDetailsID],[WorkOrderPackages],[WorkOrderWeight]
							   ,[WorkOrderPieces],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@caption,[EXBOENo],[DocumentEXBOENo] FROM Inserted 
	END    


