USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_MstrGeneralTariffPartyWise]    Script Date: 02/02/2024 12:32:25 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-------------------------
CREATE TRIGGER [dbo].[TGR_MstrGeneralTariffPartyWise]   
 ON  [dbo].[MstrGeneralTariffPartyWise]   
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
		p.[MstrGeneralTariffPartyWiseID] = i.[MstrGeneralTariffPartyWiseID]	
		and p.[TariffHeadName] = i.[TariffHeadName]
		and p.[MstrTariffHeadID] = i.[MstrTariffHeadID] 
		and p.[ContSizeID] = i.[ContSizeID] 
		and p.[CargoSize] = i.[CargoSize] 
		and p.[MstrNatureOfCargoID] = i.[MstrNatureOfCargoID] 
		and p.[CargoType] = i.[CargoType] 
		and p.[MstrBillableCommodityID] = i.[MstrBillableCommodityID] 
		and p.[BillCommodity] = i.[BillCommodity] 
		and p.[MstrSubCommodityID] = i.[MstrSubCommodityID] 
		and p.[SubCommodity] = i.[SubCommodity] 
		and p.[Rate] = i.[Rate] 
		and p.[Discount] = i.[Discount]
		and p.[RatePerMetricTon] = i.[RatePerMetricTon]
		and p.[RatePerUnit] = i.[RatePerUnit]
		and P.[Number] = i.[Number]
		and p.[StoragePattern] = i.[StoragePattern]
		and p.[FromDays] = i.[FromDays]
		and p.[ToDays] = i.[ToDays]
		and p.[MstrUomID] = i.[MstrUomID]
		and p.[UOM] = i.[UOM]
		and p.[RateOfArea] = i.[RateOfArea]
		and p.[MstrGeneralTariffPartyWiseEffetiveDateID] = i.[MstrGeneralTariffPartyWiseEffetiveDateID]
		and P.[Flagdeleted] = i.[Flagdeleted]
		and P.[DeliveryMode] = i.[DeliveryMode]
		and P.[DeliveryModeID] = i.[DeliveryModeID]
	)   
	BEGIN       
		SET NOCOUNT ON;       
		INSERT INTO [CFS_BONDED_WAREHOUSE_History].[dbo].[MstrGeneralTariffPartyWise_History]
							([MstrGeneralTariffPartyWiseID],[TariffHeadName],[MstrTariffHeadID],[ContSizeID],[CargoSize],[MstrNatureOfCargoID],[CargoType]
							,[MstrBillableCommodityID],[BillCommodity],[MstrSubCommodityID],[SubCommodity],[Rate],[Discount],[RatePerMetricTon]
							,[RatePerUnit],[EffetiveDateFrom],[EffectiveToDate],[Number],[StoragePattern],[FromDays],[ToDays],[MstrUomID],[UOM],[RateOfArea]
							, [FromWeek],[ToWeek],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[YearID],[Caption]
							,[MstrGeneralTariffPartyWiseEffetiveDateID],[DeliveryMode],[DeliveryModeID] )
					SELECT [MstrGeneralTariffPartyWiseID],[TariffHeadName],[MstrTariffHeadID],[ContSizeID],[CargoSize],[MstrNatureOfCargoID],[CargoType]
							,[MstrBillableCommodityID],[BillCommodity],[MstrSubCommodityID],[SubCommodity],[Rate],[Discount],[RatePerMetricTon]
							,[RatePerUnit],[EffetiveDateFrom],[EffectiveToDate],[Number],[StoragePattern],[FromDays],[ToDays],[MstrUomID],[UOM],[RateOfArea]
							,  [FromWeek],[ToWeek],[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[YearID],@Caption 
							,[MstrGeneralTariffPartyWiseEffetiveDateID],[DeliveryMode],[DeliveryModeID] FROM Inserted 
	END    

GO

ALTER TABLE [dbo].[MstrGeneralTariffPartyWise] ENABLE TRIGGER [TGR_MstrGeneralTariffPartyWise]
GO


