USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  UserDefinedTableType [dbo].[ConsolidatorChargeforBondInvoice]    Script Date: 5/17/2024 6:24:42 PM ******/
CREATE TYPE [dbo].[ConsolidatorChargeforBondInvoice] AS TABLE(
	[ContainerNumber] [varchar](100) NULL,
	[ISOCodeSize] [varchar](100) NULL,
	[SizeID] [int] NULL,
	[ISOCodeType] [varchar](255) NULL,
	[ArrivalDate] [datetime] NULL,
	[CargoTypeID] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[DeliveryMode] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[SUBCOMMODITYID] [int] NULL,
	[SUBCOMMODITY] [varchar](255) NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[Weight] [decimal](10, 2) NULL,
	[TariffHead] [varchar](255) NULL,
	[TariffHeadID] [int] NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,
	[PackageType] [varchar](255) NULL,
	[CalculatedStartDate] [datetime] NULL,
	[CalculatedEndDate] [datetime] NULL,
	[TotalAVDV] [decimal](20, 2) NULL,
	[Qty] [decimal](10, 2) NULL,
	[Rate] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,
	[trnDocumentID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[trnDocumentLotDetailsID] [int] NULL,
	[trnExportStufingWOContainerDetailsID] [int] NULL,
	[trnEmptyContainerGateInDetailsID] [int] NULL,
	[trnEmptyContainerOutWODetailsID] [int] NULL,
	[trnContainerDestuffingID] [int] NULL,
	[trnTruckDestuffingID] [int] NULL,
	[trnCargoSSRID] [int] NULL,
	[trnContainerSSRID] [int] NULL
)
GO


