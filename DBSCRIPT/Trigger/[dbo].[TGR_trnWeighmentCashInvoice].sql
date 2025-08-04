USE [CFS_BONDED_WAREHOUSE]
GO
/****** Object:  Trigger [dbo].[TGR_trnWeighmentCashInvoice]    Script Date: 05/10/2024 10:14:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
  
  
-------------------------  
    
CREATE TRIGGER  [dbo].[TGR_trnWeighmentCashInvoice]     
 ON  [dbo].[trnWeighmentCashInvoice]     
   
   AFTER INSERT,UPDATE    
   AS       
   DECLARE @Caption varchar(50)    
   DECLARE @IsFinished BIT  
     
   IF EXISTS(SELECT * FROM Inserted)    
   Begin  
  IF EXISTS(SELECT * FROM Deleted)        
   set @Caption = 'Edit'    
  ELSE        
   set @Caption = 'Insert'      
  
    
    
 END  
 SET @IsFinished = (SELECT IsFinished FROM Inserted)  
  IF(@IsFinished = 0)  
  BEGIN  
 IF NOT EXISTS (SELECT * FROM Inserted p    
  JOIN Deleted AS i ON   
  p.[trnWeighmentCashInvoiceID] = i.[trnWeighmentCashInvoiceID]   
  and p.[trnWeighmentCashInvoicePrefix] = i.[trnWeighmentCashInvoicePrefix]  
  and p.[trnWeighmentCashInvoiceNo] = i.[trnWeighmentCashInvoiceNo]   
  and p.[Carriar] = i.[Carriar]   
  and p.[TruckNo] = i.[TruckNo]   
  and p.[TruckID] = i.[TruckID]   
  and p.[WONO] = i.[WONO]   
  and p.[WOID] = i.[WOID]   
  and p.[trnDocumentNo] = i.[trnDocumentNo]  
  and p.[trnDocumentID] = i.[trnDocumentID]  
  and p.[TransporterName] = i.[TransporterName]   
  and p.[TransporterID] = i.[TransporterID]   
  and p.[Mode] = i.[Mode]   
  and p.[PaidBy] = i.[PaidBy]   
  and p.[GSTINNo] = i.[GSTINNo]   
  and p.[StateOfSupply] = i.[StateOfSupply]   
  and p.[Address] = i.[Address]   
  and p.[ContNo1] = i.[ContNo1]   
  and p.[Size1] = i.[Size1]   
  and p.[Type1] = i.[Type1]  
  and p.[CargoType1] = i.[CargoType1]   
  and p.[ContNo2] = i.[ContNo2]   
  and p.[Size2] = i.[Size2]   
  and p.[Type2] = i.[Type2]   
  and p.[CargoType2] = i.[CargoType2]   
  and P.[Remarks] = i.[Remarks]  
  and P.[Flagdeleted] = i.[Flagdeleted]  
  and P.[Createdby] = i.[Createdby]  
  and P.[CreatedDate] = i.[CreatedDate]  
  and P.[UpdatedDate] = i.[UpdatedDate]  
  and P.[UpdatedBy] = i.[UpdatedBy]  
  and P.[TransactionType] = i.[TransactionType]  
  and P.Isfinished = i.Isfinished  
  and P.StateID = i.StateID  
  and P.YearID = i.YearID
 )     
 BEGIN         
  SET NOCOUNT ON;         
  INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnWeighmentCashInvoice_History]  
       ([trnWeighmentCashInvoiceID],[trnWeighmentCashInvoicePrefix],[trnWeighmentCashInvoiceNo],[Carriar],  
       [TruckNo],[TruckID],[WONO],[WOID],[trnDocumentNo],[trnDocumentID],[TransporterName],[TransporterID],  
       [Mode],[PaidBy],[GSTINNo],[StateOfSupply],[Address],[ContNo1],[Size1],  
       [Type1],[CargoType1],[ContNo2],[Size2],[Type2],[CargoType2],  
       [Remarks],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],  
       [UpdatedDate],[caption],[TransactionType],Isfinished,StateID,YearID)  
  
     SELECT [trnWeighmentCashInvoiceID],[trnWeighmentCashInvoicePrefix],[trnWeighmentCashInvoiceNo],[Carriar],  
       [TruckNo],[TruckID],[WONO],[WOID],trnDocumentNo,trnDocumentID,[TransporterName],[TransporterID],  
       [Mode],[PaidBy],[GSTINNo],[StateOfSupply],[Address],[ContNo1],[Size1],  
       [Type1],[CargoType1],[ContNo2],[Size2],[Type2],[CargoType2],  
       [Remarks],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],  
       [UpdatedDate],@Caption,[TransactionType],Isfinished,StateID,YearID FROM Inserted   
 END     
 END  
 ELSE IF (EXISTS (SELECT * FROM Inserted p  
  JOIN Deleted AS i ON  
  p.[trnWeighmentCashInvoiceID] = i.[trnWeighmentCashInvoiceID]   
  WHERE ( p.[Carriar] <> i.[Carriar]   
  OR p.[TruckNo] <> i.[TruckNo]   
  OR p.[TruckID] <> i.[TruckID]   
  OR p.[WONO] <> i.[WONO]   
  OR p.[WOID] <> i.[WOID]   
  OR p.[trnDocumentNo] <> i.[trnDocumentNo]   
  OR p.[trnDocumentID] <> i.[trnDocumentID]   
  OR p.[TransporterName] <> i.[TransporterName]   
  OR p.[TransporterID] <> i.[TransporterID]   
  OR p.[Mode] <> i.[Mode]   
  OR p.[PaidBy] <> i.[PaidBy]   
  OR p.[GSTINNo] <> i.[GSTINNo]   
  OR p.[StateOfSupply] <> i.[StateOfSupply]   
  OR p.[Address] <> i.[Address]   
  OR p.[ContNo1] <> i.[ContNo1]   
  OR p.[Size1] <> i.[Size1]   
  OR p.[Type1] <> i.[Type1]  
  OR p.[CargoType1] <> i.[CargoType1]   
  OR p.[ContNo2] <> i.[ContNo2]   
  OR p.[Size2] <> i.[Size2]     OR p.[Type2] <> i.[Type2]   
  OR p.[CargoType2] <> i.[CargoType2]   
  OR P.[Remarks] <> i.[Remarks]  
  OR P.StateID <> i.StateID)  
 ))  
 BEGIN  
       SET NOCOUNT ON;  
    INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnWeighmentCashInvoice_History]  
       ([trnWeighmentCashInvoiceID],[trnWeighmentCashInvoicePrefix],[trnWeighmentCashInvoiceNo],[Carriar],  
       [TruckNo],[TruckID],[WONO],[WOID],[trnDocumentNo],[trnDocumentID],[TransporterName],[TransporterID],  
       [Mode],[PaidBy],[GSTINNo],[StateOfSupply],[Address],[ContNo1],[Size1],  
       [Type1],[CargoType1],[ContNo2],[Size2],[Type2],[CargoType2],  
       [Remarks],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],  
       [UpdatedDate],[caption],[TransactionType],Isfinished,StateID,YearID)  
      
     SELECT [trnWeighmentCashInvoiceID],[trnWeighmentCashInvoicePrefix],[trnWeighmentCashInvoiceNo],[Carriar],  
       [TruckNo],[TruckID],[WONO],[WOID],trnDocumentNo,trnDocumentID,[TransporterName],[TransporterID],  
       [Mode],[PaidBy],[GSTINNo],[StateOfSupply],[Address],[ContNo1],[Size1],  
       [Type1],[CargoType1],[ContNo2],[Size2],[Type2],[CargoType2],  
       [Remarks],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],  
       [UpdatedDate],@Caption,[TransactionType],Isfinished,StateID,YearID FROM Inserted   
 END     
 ELSE  
 BEGIN  
  IF NOT EXISTS (SELECT * FROM Inserted p  
   JOIN Deleted AS i ON  
   p.[trnWeighmentCashInvoiceID] = i.[trnWeighmentCashInvoiceID]  
   and p.[trnWeighmentCashInvoicePrefix] = i.[trnWeighmentCashInvoicePrefix]  
   and p.[trnWeighmentCashInvoiceNo] = i.[trnWeighmentCashInvoiceNo]  
   and p.[IsFinished]=i.[IsFinished]  
   and p.[Flagdeleted] =i.[Flagdeleted]  
  )  
  BEGIN  
   SET NOCOUNT ON;    
   UPDATE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnWeighmentCashInvoice_History]   
   SET   [trnWeighmentCashInvoicePrefix] = inserted.[trnWeighmentCashInvoicePrefix],  
      [trnWeighmentCashInvoiceNo] = inserted.[trnWeighmentCashInvoiceNo],  
      [IsFinished]=inserted.[IsFinished],  
      [Flagdeleted] =inserted.[Flagdeleted]  
   FROM [CFS_BONDED_WAREHOUSE_History].[dbo].[trnWeighmentCashInvoice_History]    
   INNER JOIN  inserted ON [trnWeighmentCashInvoice_History].trnWeighmentCashInvoiceID = inserted.trnWeighmentCashInvoiceID  
  END  
 END     
   
  
  
