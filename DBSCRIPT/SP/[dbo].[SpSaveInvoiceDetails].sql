

CREATE PROC [dbo].[SpSaveInvoiceDetails]    
@StorageInvoiceID int ,    
@BatchID int,    
@Createdby int,    
@YearID int,    
@IsPostProfoma bit,    
@ConsolidatorChargeDatatable ConsolidatorCharge READONLY,    
@DocumentDetails trnDocumentDetails READONLY ,  
@DiscountDataTable [DiscountDetails] READONLY   
AS    
BEGIN    
  if(@IsPostProfoma = 0)    
  BEGIN    
    if EXISTS (select * from [StorageInvoiceDocumentDetails] where flagdeleted = 0 and StorageInvoiceID = @StorageInvoiceID)    
    BEGIN    
      DELETE FROM [StorageInvoiceDocumentDetails] where flagdeleted = 0 and StorageInvoiceID = @StorageInvoiceID    
    END    
    
    if EXISTS (select * from [StorageInvoiceConsolidatorCharge] where flagdeleted = 0 and StorageInvoiceID = @StorageInvoiceID)    
    BEGIN    
      DELETE FROM [StorageInvoiceConsolidatorCharge] where flagdeleted = 0 and StorageInvoiceID = @StorageInvoiceID    
    END    
    
    INSERT INTO [dbo].[StorageInvoiceDocumentDetails]    
        ([StorageInvoiceID],[BatchID],[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BatchName],[BULKSTATUS],[CHA]    
        ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[AreaBooked]    
        ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],[Createdby]    
        ,[YearID])    
    SELECT @StorageInvoiceID,@BatchID,[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BatchName],[BULKSTATUS],[CHA]    
        ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[AreaBooked]    
        ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],@Createdby    
        ,@YearID FROM @DocumentDetails    
    
     
    INSERT INTO [dbo].[StorageInvoiceConsolidatorCharge]    
        ([StorageInvoiceID],[BatchID],[StorageStartDate],NoOfStoragePeriod,StoragePeriod,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]    
        ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID],[FromDate],[EndDate],[Weight],[Packages]    
        ,[TariffHead],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]    
        ,[trnDocumentID],[trnDocumentLotDetailsID],[trnDocumentContainerID],[trnContainerGateInDetailsID],[trnContainerDestuffingID]    
        ,[trnWorkOrderLotDetailsID],[trnCargoGateInID],[trnTruckDestuffingID],[MstrTariffHeadID],[MSTRTariffHeadName]    
        ,[Createdby],[YearID],[NoofDays],[LOTNO],[InvoiceNumber],[trnEmptyContainerGateInDetailsID])    
    
    SELECT  @StorageInvoiceID,@BatchID,[StorageStartDate],NoOfStoragePeriod,StoragePeriod,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]    
        ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID],[FromDate],[EndDate],[Weight],[Packages]    
        ,[TariffHead],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]    
        ,[trnDocumentID],[trnDocumentLotDetailsID],[trnDocumentContainerID],[trnContainerGateInDetailsID],[trnContainerDestuffingID]    
        ,[trnWorkOrderLotDetailsID],[trnCargoGateInID],[trnTruckDestuffingID],[MstrTariffHeadID],[MSTRTariffHeadName]    
        ,@Createdby ,@YearID,[NoofDays],[LOTNO],[InvoiceNumber],[trnEmptyContainerGateInDetailsID] FROM @ConsolidatorChargeDatatable    
  
INSERT INTO [dbo].[StorageInvoiceDiscountDetails]    
    ([StorageInvoiceID],[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID])    
    
  SELECT  @StorageInvoiceID ,[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID]       
     FROM @DiscountDataTable    
  END    
  ELSE    
  BEGIN    
    if EXISTS (select * from [POSTPROFOMADocumentDetails] where flagdeleted = 0 and POSTPROFOMAID = @StorageInvoiceID)    
    BEGIN    
      DELETE FROM [POSTPROFOMADocumentDetails] where flagdeleted = 0 and POSTPROFOMAID = @StorageInvoiceID    
    END    
    
    if EXISTS (select * from [POSTPROFOMAConsolidatorCharge] where flagdeleted = 0 and POSTPROFOMAID = @StorageInvoiceID)    
    BEGIN    
      DELETE FROM [POSTPROFOMAConsolidatorCharge] where flagdeleted = 0 and POSTPROFOMAID = @StorageInvoiceID    
    END    
    
    INSERT INTO [dbo].[POSTPROFOMADocumentDetails]    
        ([POSTPROFOMAID],[BatchID],[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BatchName],[BULKSTATUS],[CHA]    
        ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[AreaBooked]    
        ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],[Createdby]    
        ,[YearID])    
    SELECT @StorageInvoiceID,@BatchID,[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BatchName],[BULKSTATUS],[CHA]    
        ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[AreaBooked]    
        ,[AdditionalAreaOccupied],[ReleasedArea],[TotalArea],[trnDocumentLotdetailsID],@Createdby    
        ,@YearID FROM @DocumentDetails    
    
     
    INSERT INTO [dbo].[POSTPROFOMAConsolidatorCharge]    
        ([POSTPROFOMAID],[BatchID],[StorageStartDate],NoOfStoragePeriod,StoragePeriod,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]    
        ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID],[FromDate],[EndDate],[Weight],[Packages]    
        ,[TariffHead],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]    
        ,[trnDocumentID],[trnDocumentLotDetailsID],[trnDocumentContainerID],[trnContainerGateInDetailsID],[trnContainerDestuffingID]    
        ,[trnWorkOrderLotDetailsID],[trnCargoGateInID],[trnTruckDestuffingID],[MstrTariffHeadID],[MSTRTariffHeadName]    
        ,[Createdby],[YearID],[NoofDays],[LOTNO],[InvoiceNumber],[trnEmptyContainerGateInDetailsID])    
    
    SELECT  @StorageInvoiceID,@BatchID,[StorageStartDate],NoOfStoragePeriod,StoragePeriod,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],[CargoType],[CargoTypeID]    
        ,[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[UOM],[UOMID],[FromDate],[EndDate],[Weight],[Packages]    
        ,[TariffHead],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount]    
        ,[trnDocumentID],[trnDocumentLotDetailsID],[trnDocumentContainerID],[trnContainerGateInDetailsID],[trnContainerDestuffingID]    
        ,[trnWorkOrderLotDetailsID],[trnCargoGateInID],[trnTruckDestuffingID],[MstrTariffHeadID],[MSTRTariffHeadName]    
        ,@Createdby ,@YearID,[NoofDays],[LOTNO],[InvoiceNumber],[trnEmptyContainerGateInDetailsID] FROM @ConsolidatorChargeDatatable    
  
 INSERT INTO [dbo].[PostProfomaDiscountDetails]    
    ([PostProfomaID],[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID])    
    
  SELECT  @StorageInvoiceID ,[trnDocumentID],[TariffHeadID],[TariffHead],[TaxableAmount],[Discount],[NetTaxableAmount],[GST],[GSTAmount],[TotalAmount],[Createdby],[YearID]       
     FROM @DiscountDataTable    
  END    
     
END    
    