  
CREATE PROC [dbo].[SpSaveHandlingInvoiceDetails]  
@HandlingInvoiceID int ,  
@BatchID int,  
@Createdby int,  
@YearID int,  
@ConsolidatorChargeDatatable [ConsolidatorChargeforHandlingInvoice] READONLY,  
@DocumentDetails trnDocumentDetails READONLY,  
@DiscountDataTable [DiscountDetails] READONLY  
  
AS  
BEGIN  
  
 if EXISTS (select * from [HandlingInvoiceDocumentDetails] where flagdeleted = 0 and HandlingInvoiceID = @HandlingInvoiceID)  
 BEGIN  
   DELETE FROM [HandlingInvoiceDocumentDetails] where flagdeleted = 0 and HandlingInvoiceID = @HandlingInvoiceID  
 END  
  
 if EXISTS (select * from [HandlingInvoiceConsolidatorCharge] where flagdeleted = 0 and HandlingInvoiceID = @HandlingInvoiceID)  
 BEGIN  
   DELETE FROM [HandlingInvoiceConsolidatorCharge] where flagdeleted = 0 and HandlingInvoiceID = @HandlingInvoiceID  
 END  
  
 INSERT INTO [dbo].[HandlingInvoiceDocumentDetails]  
           ([HandlingInvoiceID],[BatchID],[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BatchName],[BULKSTATUS],[CHA]  
           ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[AreaBooked]  
     ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],[Createdby]  
     ,[YearID])  
 SELECT @HandlingInvoiceID,@BatchID,[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BatchName],[BULKSTATUS],[CHA]  
           ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[AreaBooked]  
     ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],@Createdby  
     ,@YearID FROM @DocumentDetails  
  
   
 INSERT INTO [dbo].[HandlingInvoiceConsolidatorCharge]  
           ([HandlingInvoiceID],[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]  
           ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID],[Weight],[Packages]  
           ,[TariffHead],[TariffHeadID],[Qty],[Rate],[AdditionalRate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount] 
           ,[trnDocumentID] ,[TariffHeadNo]  
           ,[Createdby],[YearID],[trnContainerGateInID],[trnContainerDestuffingID],[trnTruckDestuffingID],[WorkOrderID],  
     [trnContainerSSRID],[trnCargoSSRID],[SSRInvoiceID],[IsBillingBefore],[trnReeferPluginOutID],[trnexportmovementWOContainerDetailsID]  
     ,[trnEmptyContainerInWOContainerDetailsID],[trnContainerGateInDetailsID])  
  
 SELECT  @HandlingInvoiceID,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]  
           ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID],[Weight],[Packages]  
           ,[TariffHead],[TariffHeadID],[Qty],[Rate],[AdditionalRate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]  
           ,[trnDocumentID], [TariffHeadNo]  
           ,@Createdby ,@YearID,[trnContainerGateInID],[trnContainerDestuffingID],[trnTruckDestuffingID],[WorkOrderID],  
     [trnContainerSSRID],[trnCargoSSRID],[SSRInvoiceID],[IsBillingBefore],[trnReeferPluginOutID],[trnexportmovementWOContainerDetailsID]  
     ,[trnEmptyContainerInWOContainerDetailsID],[trnContainerGateInDetailsID] FROM @ConsolidatorChargeDatatable  
     
 INSERT INTO [dbo].[HandlingInvoiceDiscountDetails]    
    ([HandlingInvoiceID],[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID])    
    
  SELECT  @HandlingInvoiceID ,[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID]       
     FROM @DiscountDataTable    
  
END    
    