USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnDocumentContainer]    Script Date: 01/11/2024 5:51:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-------------------------
ALTER TRIGGER  [dbo].[TGR_trnDocumentContainer]   
 ON  [dbo].[trnDocumentContainer]   
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
		p.[trnDocumentContainerID] = i.[trnDocumentContainerID]	
		and p.[trnDocumentID] = i.[trnDocumentID]
		and p.[ContainerNumber] = i.[ContainerNumber] 
		and p.[ISOCodeID] = i.[ISOCodeID] 
		and p.[ISOCode] = i.[ISOCode] 
		and p.[ISOCodeSize] = i.[ISOCodeSize] 
		and p.[NatureofCargoID] = i.[NatureofCargoID] 
		and p.[NatureofCargoName] = i.[NatureofCargoName] 
		and p.[PackageTypeID] = i.[PackageTypeID] 
		and p.[GroupCommodityID] = i.[GroupCommodityID] 
		and p.[PackageType] = i.[PackageType] 
		and p.[GroupCommodity] = i.[GroupCommodity] 
		and p.[NoOfPiecesForContainer]=i.[NoOfPiecesForContainer]
		and p.[BillCommodityID] = i.[BillCommodityID]
		and p.[BillCommodity] = i.[BillCommodity] 
		and p.[SubCommodityID] = i.[SubCommodityID] 
		and p.[SubCommodityName] = i.[SubCommodityName] 
		and p.[IsBulkForContainer] = i.[IsBulkForContainer] 
		and p.[WeightForContainer] = i.[WeightForContainer] 
		and P.[Flagdeleted] = i.[Flagdeleted]
		and P.[InType] = i.[InType]
		and P.[DeliveryMode] = i.[DeliveryMode]
		and P.[IMO] = i.[IMO]
		and P.[UN] = i.[UN]
		and P.[TEMP] = i.[TEMP]
		and P.[ISOCodeType] = i.[ISOCodeType]
		and P.[NoOfPackageForContainer] = i.[NoOfPackageForContainer]
		and P.[DoNO] = i.[DoNO]
		and P.[DoDate] = i.[DoDate]
		and P.[SealNo] = i.[SealNo]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnDocumentContainer_History]
							([trnDocumentContainerID],[trnDocumentID],[ContainerNumber],[ISOCodeID],[ISOCode],[ISOCodeSize],[ISOCodeType],[NatureofCargoID],[NatureofCargoName],[PackageTypeID],[PackageType],[GroupCommodityID],[GroupCommodity]
           ,[BillCommodityID],[BillCommodity],[SubCommodityID],[SubCommodityName],[IsBulkForContainer],[NoOfPackageForContainer],[WeightForContainer],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate]
           ,[YearID],[Caption],[InType],[DeliveryMode],[IMO],[UN],[TEMP],[NoOfPiecesForContainer],DoNO,DoDate,SealNo)
		SELECT [trnDocumentContainerID],[trnDocumentID],[ContainerNumber],[ISOCodeID],[ISOCode],[ISOCodeSize],[ISOCodeType],[NatureofCargoID],[NatureofCargoName],[PackageTypeID],[PackageType],[GroupCommodityID],[GroupCommodity]
           ,[BillCommodityID],[BillCommodity],[SubCommodityID],[SubCommodityName],[IsBulkForContainer],[NoOfPackageForContainer],[WeightForContainer],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate]
           ,[YearID],@Caption,[InType],[DeliveryMode],[IMO],[UN],[TEMP],[NoOfPiecesForContainer],DoNO,DoDate,SealNo FROM Inserted 
	END    


GO

ALTER TABLE [dbo].[trnDocumentContainer] ENABLE TRIGGER [TGR_trnDocumentContainer]
GO


