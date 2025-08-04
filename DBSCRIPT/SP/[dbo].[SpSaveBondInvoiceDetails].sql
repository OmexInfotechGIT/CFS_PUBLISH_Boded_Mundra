USE [CFS_BONDED_WAREHOUSE]
GO
/****** Object:  StoredProcedure [dbo].[SpSaveBondInvoiceDetails]    Script Date: 5/17/2024 6:24:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 
 --DROP PROC [dbo].[SpSaveBondInvoiceDetails]   
ALTER PROC [dbo].[SpSaveBondInvoiceDetails]          
@BondInvoiceID INT ,        
@Createdby INT,      
@YearID INT,      
@ConsolidatorChargeDatatable [ConsolidatorChargeforBondInvoice] READONLY,      
@DocumentDetails trnDocumentDetailsForBondInvoice READONLY,      
@DiscountDataTable [DiscountDetails] READONLY      
      
AS      
BEGIN      
      
 IF EXISTS (SELECT * FROM [BondInvoiceDocumentDetails] WHERE flagdeleted = 0 and BondInvoiceID = @BondInvoiceID)      
 BEGIN      
   DELETE FROM [BondInvoiceDocumentDetails] WHERE flagdeleted = 0 and BondInvoiceID = @BondInvoiceID      
 END      
      
 IF EXISTS (SELECT * FROM [BondInvoiceConsolidatorCharge] WHERE flagdeleted = 0 and BondInvoiceID = @BondInvoiceID)      
 BEGIN      
   DELETE FROM [BondInvoiceConsolidatorCharge] WHERE flagdeleted = 0 and BondInvoiceID = @BondInvoiceID      
 END      
      
 INSERT INTO [dbo].[BondInvoiceDocumentDetails]      
           ([BondInvoiceID],[BOENo],[BOEDate],[BondNo],[BondDate],[CPNo],[CPDate],[BLNo],[BLDate],[IGMNo],[ItemNo],[HoldStatus]     
           ,[AssessableValue],[EnhanceAssembleValue],[Dutyvalue],[EnhanceDutyvalue],[CHA],[Forwarder],[Importer],[NOOFPKGS],[NOOFPIECES],[AreaBooked]      
     ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],[trnDocumentID],[Createdby]      
     ,[YearID])      
 SELECT @BondInvoiceID,[BOENo],[BOEDate],[BondNo],[BondDate],[CPNo],[CPDate],[BLNo],[BLDate],[IGMNo],[ItemNo],[HoldStatus]      
           ,[AV],[EnhancedAV],[DV],[EnhancedDV],[CHA],[Forwarder],[Importer],[NOOFPKGS],[NOOFPIECES],[WEIGHT]      
     ,[PACKAGETYPE],[CARGODESC],[BULKSTATUS],[trnDocumentLotdetailsID],[trnDocumentID],@Createdby      
     ,@YearID FROM @DocumentDetails      
      
       
 INSERT INTO [dbo].[BondInvoiceConsolidatorCharge]      
           ([BondInvoiceID],[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]      
           ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[FromDate],[EndDate],[PackageType],[UOM],[UOMID],[Weight]  
           ,[TariffHead],[TariffHeadID],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]     
           ,[trnDocumentID],[Createdby],[YearID],[trnDocumentContainerID],[trnDocumentLotDetailsID],[trnExportStufingWOContainerDetailsID]  
     ,[trnEmptyContainerGateInDetailsID],[trnEmptyContainerOutWODetailsID],[trnContainerDestuffingID],[trnTruckDestuffingID],[trnCargoSSRID],[trnContainerSSRID])      
      
 SELECT  @BondInvoiceID,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]      
           ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[FromDate],[ToDate],[PackageType],[UOM],[UOMID],[Weight]  
           ,[TariffHead],[TariffHeadID],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]      
           ,[trnDocumentID],@Createdby ,@YearID,[trnDocumentContainerID],[trnDocumentLotDetailsID],[trnExportStufingWOContainerDetailsID]  
     ,[trnEmptyContainerGateInDetailsID],[trnEmptyContainerOutWODetailsID],[trnContainerDestuffingID],[trnTruckDestuffingID],[trnCargoSSRID],[trnContainerSSRID] FROM @ConsolidatorChargeDatatable      
         
 INSERT INTO [dbo].[BondInvoiceDiscountDetails]        
    ([BondInvoiceID],[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID])        
        
  SELECT  @BondInvoiceID ,[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID]           
     FROM @DiscountDataTable        
      
END        
        