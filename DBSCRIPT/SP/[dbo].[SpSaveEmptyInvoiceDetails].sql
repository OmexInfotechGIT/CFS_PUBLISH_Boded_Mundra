USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  StoredProcedure [dbo].[SpSaveEmptyInvoiceDetails]    Script Date: 5/16/2023 11:59:51 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
  
CREATE PROC [dbo].[SpSaveEmptyInvoiceDetails]  
@EmptyInvoiceID int ,    
@CreatedBy int,  
@YearID int,  
@ConsolidatorChargeForEmptyInvoice ConsolidatorChargeForEmptyInvoice READONLY,  
@DiscountDetailsForEmptyInvoice EmptyInvoiceDiscountDetails READONLY  
AS  
BEGIN  
  
    INSERT INTO [dbo].[EmptyInvoiceConsolidateChargeDetails]  
        ([EmptyInvoiceID],[AgentName],[LineName],[WONO],[WODate],[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[FromDate],[ToDate]
		,[DeliveryMode],[CargoType],[CargoTypeID],[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID]
		,[MstrTariffHeadID],[MSTRTariffHeadName],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount],[trnDocumentID],[trnDocumentLotDetailsID]
		,[trnDocumentContainerID],[trnContainerGateInDetailsID],[trnContainerDestuffingID],[trnEmptyContainerOutWOID],[Createdby],[YearID])  

    SELECT @EmptyInvoiceID,[AgentName],[LineName],[WONO],[WODate],[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[FromDate],[ToDate]
		,[DeliveryMode],[CargoType],[CargoTypeID],[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID]
		,[MstrTariffHeadID],[MSTRTariffHeadName],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount],[trnDocumentID],[trnDocumentLotDetailsID]
		,[trnDocumentContainerID],[trnContainerGateInDetailsID],[trnContainerDestuffingID],[trnEmptyContainerOutWOID],@CreatedBy,@YearID FROM @ConsolidatorChargeForEmptyInvoice  
  
   
   INSERT INTO [dbo].[EmptyInvoiceDiscountDetails]  
        ([EmptyInvoiceID],[Qty],[Rate],[Discount],[TaxableAmount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[MstrTariffHeadID],[MSTRTariffHeadName],[StateID],[Createdby],[YearID])  

    SELECT @EmptyInvoiceID,0,0,[Discount],[TaxableAmount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[TariffHeadID],[TariffHead],[StateID],@CreatedBy,@YearID
	FROM @DiscountDetailsForEmptyInvoice 
	

END  
  
GO


