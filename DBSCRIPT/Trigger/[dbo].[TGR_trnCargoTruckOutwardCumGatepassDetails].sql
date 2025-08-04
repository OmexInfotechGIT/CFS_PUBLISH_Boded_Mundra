USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnCargoTruckOutwardCumGatepassDetails]    Script Date: 01/09/2024 11:47:35 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--------
CREATE TRIGGER  [dbo].[TGR_trnCargoTruckOutwardCumGatepassDetails]   
 ON  [dbo].[trnCargoTruckOutwardCumGatepassDetails]   
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
						p.[trnCargoTruckOutwardCumGatepassID] = i.[trnCargoTruckOutwardCumGatepassID]	and 
						p.[trnDocumentLotDetailsID] = i.[trnDocumentLotDetailsID]	and 
						p.[Packages] = i.[Packages]	and 
						p.[Weight] = i.[Weight]	and 
						p.[Pieces] = i.[Pieces]	and 
						p.[AreaRequired] = i.[AreaRequired]	and 
						p.[WHLocationID] = i.[WHLocationID]	and 
						p.[WHLocation] = i.[WHLocation]	and 
						p.[PackagingTypeID] = i.[PackagingTypeID]	and 
						p.[PackagingType] = i.[PackagingType]	and 
						p.[BillCommodityID] = i.[BillCommodityID]	and 
						p.[BillCommodity] = i.[BillCommodity]	and 
						p.[EquipmentUsedID] = i.[EquipmentUsedID]	and 
						p.[EquipmentUsed] = i.[EquipmentUsed]	and 
						p.[Createdby] = i.[Createdby]	and 
						p.[CreatedDate] = i.[CreatedDate]	and 
						p.[UpdatedBy] = i.[UpdatedBy]	and 
						p.[UpdatedDate] = i.[UpdatedDate]	and 
						p.[CargoName] = i.[CargoName]	and 
						p.[trnDocumentBoiItemsID] = i.[trnDocumentBoiItemsID]	and 
						p.[trnDestuffingID] = i.[trnDestuffingID]	and 
						p.[Type] = i.[Type]	and 
						p.[EquipmentUsed] = i.[EquipmentUsed]	and 
						p.[Flagdeleted] = i.[Flagdeleted]	and 
						p.[trnExBondDocumentEntryDetailsID] = i.[trnExBondDocumentEntryDetailsID]   
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[trnCargoTruckOutwardCumGatepassDetails_History]
										   ([trnCargoTruckOutwardCumGatepassID]
										   ,[trnDocumentLotDetailsID]
										   ,[Packages]
										   ,[Weight]
										   ,[Pieces]
										   ,[AreaRequired]
										   ,[WHLocationID]
										   ,[WHLocation]
										   ,[PackagingTypeID]
										   ,[PackagingType]
										   ,[BillCommodityID]
										   ,[BillCommodity]
										   ,[EquipmentUsedID]
										   ,[EquipmentUsed]
										   ,[Flagdeleted]
										   ,[Createdby]
										   ,[CreatedDate]
										   ,[UpdatedBy]
										   ,[UpdatedDate]
										   ,[CargoName]
										   ,[trnDocumentBoiItemsID]
										   ,[trnDestuffingID]
										   ,[Type]
										   ,[trnExBondDocumentEntryDetailsID]
										   ,[Caption])
						SELECT [trnCargoTruckOutwardCumGatepassID]
										   ,[trnDocumentLotDetailsID]
										   ,[Packages]
										   ,[Weight]
										   ,[Pieces]
										   ,[AreaRequired]
										   ,[WHLocationID]
										   ,[WHLocation]
										   ,[PackagingTypeID]
										   ,[PackagingType]
										   ,[BillCommodityID]
										   ,[BillCommodity]
										   ,[EquipmentUsedID]
										   ,[EquipmentUsed]
										   ,[Flagdeleted]
										   ,[Createdby]
										   ,[CreatedDate]
										   ,[UpdatedBy]
										   ,[UpdatedDate]
										   ,[CargoName]
										   ,[trnDocumentBoiItemsID]
										   ,[trnDestuffingID]
										   ,[Type]
										   ,[trnExBondDocumentEntryDetailsID]
										   ,@caption
										    FROM Inserted 
					END    
			END	


GO

ALTER TABLE [dbo].[trnCargoTruckOutwardCumGatepassDetails] ENABLE TRIGGER [TGR_trnCargoTruckOutwardCumGatepassDetails]
GO


