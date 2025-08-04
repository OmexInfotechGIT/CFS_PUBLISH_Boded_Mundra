USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[ExportInvoiceConsolidatorCharge]    Script Date: 01/09/2024 10:00:57 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ExportInvoiceConsolidatorCharge](
	[ExportInvoiceConsolidatorChargeID] [int] IDENTITY(1,1) NOT NULL,
	[ExportInvoiceID] [int] NULL,
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
	[TariffHeadNo] [varchar](255) NULL,
	[trnExportDocumentDeclarationID] [bigint] NULL,
	[trnExportDocumentDeclarationLotDetailsID] [bigint] NULL,
	[trnexportstufingwoID] [bigint] NULL,
	[trnexportstufingwoContainerDetailsID] [bigint] NULL,
	[trnexportmovementWOID] [bigint] NULL,
	[trnexportmovementWOContainerDetailsID] [bigint] NULL,
	[IsBillingBefore] [bigint] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ExportInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_ExportInvoiceConsolidatorCharge_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[ExportInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_ExportInvoiceConsolidatorCharge_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


