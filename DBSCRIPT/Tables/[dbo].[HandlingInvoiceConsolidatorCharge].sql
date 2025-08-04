USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[HandlingInvoiceConsolidatorCharge]    Script Date: 01/08/2024 7:09:58 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HandlingInvoiceConsolidatorCharge](
	[HandlingInvoiceConsolidatorChargeID] [int] IDENTITY(1,1) NOT NULL,
	[HandlingInvoiceID] [int] NULL,
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
	[TariffHeadNo] [varchar](255) NULL,
	[trnDocumentID] [int] NULL,
	[trnContainerGateInID] [int] NULL,
	[trnContainerDestuffingID] [int] NULL,
	[trnTruckDestuffingID] [int] NULL,
	[WorkOrderID] [int] NULL,
	[trnContainerSSRID] [int] NULL,
	[trnCargoSSRID] [int] NULL,
	[SSRInvoiceID] [int] NULL,
	[IsBillingBefore] [bit] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[AdditionalRate] [decimal](10, 2) NULL,
	[trnReeferPluginOutID] [int] NULL,
	[trnexportmovementWOContainerDetailsID] [bigint] NULL,
	[trnEmptyContainerInWOContainerDetailsID] [bigint] NULL,
	[trnContainerGateInDetailsID] [bigint] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[HandlingInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_HandlingInvoiceConsolidatorCharge_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[HandlingInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_HandlingInvoiceConsolidatorCharge_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


