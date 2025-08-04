USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  UserDefinedTableType [dbo].[ConsolidatorChargeForEmptyInvoice]    Script Date: 5/2/2024 5:08:14 PM ******/
CREATE TYPE [dbo].[ConsolidatorChargeForEmptyInvoice] AS TABLE(
	[AgentName] [varchar](100) NULL,
	[LineName] [varchar](100) NULL,
	[WONO] [varchar](100) NULL,
	[WODate] [datetime] NULL,
	[ContainerNumber] [varchar](100) NULL,
	[ISOCodeSize] [varchar](100) NULL,
	[SizeID] [int] NULL,
	[ISOCodeType] [varchar](255) NULL,
	[ArrivalDate] [datetime] NULL,
	[FromDate] [datetime] NULL,
	[ToDate] [datetime] NULL,
	[DeliveryMode] [varchar](255) NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[SUBCOMMODITY] [varchar](255) NULL,
	[SUBCOMMODITYID] [int] NULL,
	[PackageType] [varchar](255) NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,
	[MstrTariffHeadID] [int] NULL,
	[MSTRTariffHeadName] [varchar](255) NULL,
	[Qty] [decimal](10, 2) NULL,
	[Rate] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,
	[trnDocumentID] [int] NULL,
	[trnDocumentLotDetailsID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[trnContainerGateInDetailsID] [int] NULL,
	[trnContainerDestuffingID] [int] NULL,
	[trnEmptyContainerOutWOID] [int] NULL
)
GO


