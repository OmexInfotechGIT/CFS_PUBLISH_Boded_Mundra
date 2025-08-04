--drop proc [SpSaveExportInvoiceDetails]
CREATE PROC [dbo].[SpSaveExportInvoiceDetails]  
@ExportInvoiceID int ,  
@Createdby int,  
@YearID int,  
@ConsolidatorChargeDatatable [ConsolidatorChargeforExportInvoice] READONLY,  
@DocumentDetails trnDocumentDetails READONLY  
AS  
BEGIN  
  
 if EXISTS (select * from [ExportInvoiceDocumentDetails] where flagdeleted = 0 and ExportInvoiceID = @ExportInvoiceID)  
 BEGIN  
   DELETE FROM [ExportInvoiceDocumentDetails] where flagdeleted = 0 and ExportInvoiceID = @ExportInvoiceID  
 END  
  
 if EXISTS (select * from [ExportInvoiceConsolidatorCharge] where flagdeleted = 0 and ExportInvoiceID = @ExportInvoiceID)  
 BEGIN  
   DELETE FROM [ExportInvoiceConsolidatorCharge] where flagdeleted = 0 and ExportInvoiceID = @ExportInvoiceID  
 END  
  
 INSERT INTO [dbo].[ExportInvoiceDocumentDetails]  
           ([ExportInvoiceID],[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BULKSTATUS],[CHA]  
           ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],  
     [trnDocumentLotdetailsID],[Createdby]  
     ,[YearID])  
 SELECT @ExportInvoiceID,[ShiipingBillNo],[ShipingBillDate],[InvoiceNumber],[InvoiceDate],[LOTNO],[BULKSTATUS],[CHA]  
           ,[Forwarder],[CARGODESC],[PACKAGETYPE],[NOOFPKGS],[NOOFPIECES],[WEIGHT],[TillPackages],[TillPieces],[TillWeight],[trnDocumentLotdetailsID],@Createdby  
     ,@YearID FROM @DocumentDetails  
  
   
 INSERT INTO [dbo].[ExportInvoiceConsolidatorCharge]  
           ([ExportInvoiceID],[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],  
   [CargoType],[CargoTypeID],[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[EquipmentType],[UOM],[UOMID],  
   [Weight], [Packages],[TariffHead],[TariffHeadID],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount],[TariffHeadNo],  
     [trnExportDocumentDeclarationID],[trnExportDocumentDeclarationLotDetailsID],[trnexportstufingwoID],[trnexportstufingwoContainerDetailsID],  
     [trnexportmovementWOID],[trnexportmovementWOContainerDetailsID],[IsBillingBefore],[Createdby],[YearID] )  
  
 SELECT  @ExportInvoiceID,[ContainerNumber],[ISOCodeSize],[SizeID],[ISOCodeType],[ArrivalDate],[DeliveryMode],  
   [CargoType],[CargoTypeID],[BillCommodity],[BillCommodityID],[SUBCOMMODITY],[SUBCOMMODITYID],[PackageType],[EquipmentType],[UOM],[UOMID],  
   [Weight], [Packages],[TariffHead],[TariffHeadID],[Qty],[Rate],[Discount],[TaxableAmount],[GST],[GSTAmount],[TotalAmount],[TariffHeadNo],  
     [trnExportDocumentDeclarationID],[trnExportDocumentDeclarationLotDetailsID],[trnexportstufingwoID],[trnexportstufingwoContainerDetailsID],  
     [trnexportmovementWOID],[trnexportmovementWOContainerDetailsID],[IsBillingBefore],@Createdby ,@YearID  FROM @ConsolidatorChargeDatatable  
END  
  
  