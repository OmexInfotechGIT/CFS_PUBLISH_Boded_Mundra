  
  -- drop type [ConsolidatorChargeforExportInvoice]
CREATE TYPE [dbo].[ConsolidatorChargeforExportInvoice] AS TABLE(
	[ContainerNumber] [varchar](100) NULL,
	[ISOCodeSize] [varchar](100) NULL,
	[SizeID] [int] NULL,
	[ISOCodeType] [varchar](255) NULL,
	[ArrivalDate] [datetime] NULL,
	[DeliveryMode] [varchar](255) NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[SUBCOMMODITY] [varchar](255) NULL,
	[SUBCOMMODITYID] [int] NULL,
	[PackageType] [varchar](255) NULL,
	[EquipmentType] [varchar](255) NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,	
	[Weight] [decimal](10, 2) NULL,
	[Packages] [decimal](10, 2) NULL,	
	[TariffHead] [varchar](255) NULL,
	[TariffHeadID] [int] NULL,
	[Qty] [decimal](10, 2) NULL,
	[Rate] [decimal](10, 2) NULL,	
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,	
	[TariffHeadNo][varchar](255) NULL,
	[trnExportDocumentDeclarationID]  [bigint] NULL,
    [trnExportDocumentDeclarationLotDetailsID]  [bigint] NULL,
	[trnexportstufingwoID]  [bigint] NULL,
	[trnexportstufingwoContainerDetailsID]  [bigint] NULL,
	[trnexportmovementWOID]  [bigint] NULL,
	[trnexportmovementWOContainerDetailsID]  [bigint] NULL,
    [IsBillingBefore]  [bigint] NULL

)
GO


