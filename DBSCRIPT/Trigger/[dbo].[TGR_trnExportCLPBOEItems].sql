USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnExportCLP]    Script Date: 01/17/2024 4:50:53 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



-------------------------
ALTER TRIGGER  [dbo].[TGR_trnExportCLPBOEItems]   
 ON  [dbo].[trnExportCLPBOEItems]   
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
		p.[trnExportCLPBOEItemsID] = i.[trnExportCLPBOEItemsID]	
		and p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID]
		and p.[trnExportDocumentDeclarationID] = i.[trnExportDocumentDeclarationID] 
		and p.[trnExportDocumentDeclarationLotDetailsID] = i.[trnExportDocumentDeclarationLotDetailsID] 
		and p.[BOENo] = i.[BOENo] 
		and p.[WHLocationID] = i.[WHLocationID] 
		and p.[WHLocation] = i.[WHLocation] 
		and p.[WHPackages] = i.[WHPackages]
		and p.[WHPieces] = i.[WHPieces]
		and p.[WHWeight] = i.[WHWeight]
		and p.[CLPPackages] = i.[CLPPackages]
		and p.[CLPPieces] = i.[CLPPieces] 
		and p.[CLPWeight] = i.[CLPWeight] 
		and p.[PackingTypeID] = i.[PackingTypeID] 
		and p.[PackingType] = i.[PackingType] 
		and p.[BillCommodity] = i.[BillCommodity]
		and p.[BillCommodityID] = i.[BillCommodityID]
		and p.[Equipment] = i.[Equipment]
		and p.[EquipmentID] = i.[EquipmentID]
		and p.[AreaUOM] = i.[AreaUOM]
		and p.[BalanceArea] = i.[BalanceArea]
		and p.[AreaCleared] = i.[AreaCleared]
		and p.[trnExportCLPID] = i.[trnExportCLPID]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and p.[trnDestuffingID] = i.[trnDestuffingID]
		and p.[Type] = i.[Type]
		and p.[trnDocumentBoiItemsID] = i.[trnDocumentBoiItemsID]
		and p.[trnExBondDocumentEntryDetailsID] = i.[trnExBondDocumentEntryDetailsID]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnExportCLPBOEItems_History]
							([trnExportCLPBOEItemsID],[trnDocumentLotDetailsID],[trnExportDocumentDeclarationID],[trnExportDocumentDeclarationLotDetailsID],[BOENo],[WHLocationID], [WHLocation], [WHPackages], [WHPieces],[WHWeight]
							,[CLPPackages],[CLPPieces],[CLPWeight],[PackingTypeID],[PackingType],[BillCommodity],[BillCommodityID],[Equipment],[EquipmentID]
							,[AreaUOM],[BalanceArea],[AreaCleared],[trnExportCLPID],trnDestuffingID,Type,trnDocumentBoiItemsID,trnExBondDocumentEntryDetailsID
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
					SELECT [trnExportCLPBOEItemsID],[trnDocumentLotDetailsID],[trnExportDocumentDeclarationID],[trnExportDocumentDeclarationLotDetailsID],[BOENo],[WHLocationID], [WHLocation], [WHPackages], [WHPieces], [WHWeight]
							,[CLPPackages],[CLPPieces],[CLPWeight],[PackingTypeID],[PackingType],[BillCommodity],[BillCommodityID],[Equipment],[EquipmentID]
							,[AreaUOM],[BalanceArea],[AreaCleared],[trnExportCLPID],trnDestuffingID,Type,trnDocumentBoiItemsID,trnExBondDocumentEntryDetailsID
							,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],@Caption FROM Inserted 
	END    


GO

ALTER TABLE [dbo].[trnExportCLPBOEItems] ENABLE TRIGGER [TGR_trnExportCLPBOEItems]
GO


