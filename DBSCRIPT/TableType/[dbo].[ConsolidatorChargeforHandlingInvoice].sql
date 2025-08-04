USE [CFS_BONDED_WAREHOUSE]
GO
  --drop Type ConsolidatorChargeforHandlingInvoice
/****** Object:  UserDefinedTableType [dbo].[ConsolidatorCharge]    Script Date: 5/29/2023 3:31:00 PM ******/
CREATE TYPE [dbo].[ConsolidatorChargeforHandlingInvoice] AS TABLE(
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
	[AdditionalRate] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,	
	[TariffHeadNo][varchar](255) NULL,
	[trnDocumentID] [int] NULL,
	[trnContainerGateInID] [int] NULL,
    [trnContainerDestuffingID] [int] NULL,
    [trnTruckDestuffingID]  [int] NULL,
    [WorkOrderID]  [int] NULL,
    [trnContainerSSRID]  [int] NULL,
    [trnCargoSSRID]  [int] NULL,
    [SSRInvoiceID]  [int] NULL,
	[IsBillingBefore][bit] null,
	[trnReeferPluginOutID]  [int] NULL,
	[trnexportmovementWOContainerDetailsID] [bigint] NULL,
	[trnEmptyContainerInWOContainerDetailsID] [bigint] NULL,
	[trnContainerGateInDetailsID]  [bigint] NULL
)
GO


