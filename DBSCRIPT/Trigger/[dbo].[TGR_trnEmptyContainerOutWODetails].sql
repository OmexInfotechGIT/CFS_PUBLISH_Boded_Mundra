USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnEmptyContainerOutWODetails]    Script Date: 01/05/2024 7:07:13 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-------------------------
CREATE TRIGGER  [dbo].[TGR_trnEmptyContainerOutWODetails]   
 ON  [dbo].[trnEmptyContainerOutWODetails]   
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
		p.[trnEmptyContainerOutWODetailsID] = i.[trnEmptyContainerOutWODetailsID]	
		and p.[trnEmptyContainerOutWOID] = i.[trnEmptyContainerOutWOID]
		and p.[trnDocumentContainerID] = i.[trnDocumentContainerID] 
		and p.[trncontainerDestuffingID] = i.[trncontainerDestuffingID] 
		and p.[trnContainerGateInDetailsID] = i.[trnContainerGateInDetailsID] 
		and p.[ContainerNumber] = i.[ContainerNumber] 
		and p.[ISOCode] = i.[ISOCode] 
		and p.[ISOCodeSize] = i.[ISOCodeSize] 
		and p.[ISOCodeType] = i.[ISOCodeType]
		and p.[GateInDate] = i.[GateInDate]
		and p.[GateOutDate] = i.[GateOutDate]
		and p.[ISCanceled] = i.[ISCanceled]
		and p.[CancelRemarks] = i.[CancelRemarks] 
		and P.[Flagdeleted] = i.[Flagdeleted]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnEmptyContainerOutWODetails_History]
							([trnEmptyContainerOutWODetailsID],[trnEmptyContainerOutWOID],[trnDocumentContainerID],[trncontainerDestuffingID]
							,[trnContainerGateInDetailsID] ,[ContainerNumber],[ISOCode],[ISOCodeSize],[ISOCodeType],[GateInDate],[GateOutDate]
							,[ISCanceled],[CancelRemarks],[Flagdeleted],[CreatedBy],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
					SELECT [trnEmptyContainerOutWODetailsID],[trnEmptyContainerOutWOID],[trnDocumentContainerID],[trncontainerDestuffingID]
							,[trnContainerGateInDetailsID] ,[ContainerNumber],[ISOCode],[ISOCodeSize],[ISOCodeType],[GateInDate],[GateOutDate]
							,[ISCanceled],[CancelRemarks],[Flagdeleted],[CreatedBy],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption FROM Inserted 
	END    


GO

ALTER TABLE [dbo].[trnEmptyContainerOutWODetails] ENABLE TRIGGER [TGR_trnEmptyContainerOutWODetails]
GO


