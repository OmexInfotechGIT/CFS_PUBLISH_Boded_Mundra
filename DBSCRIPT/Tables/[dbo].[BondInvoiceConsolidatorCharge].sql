USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[BondInvoiceConsolidatorCharge]    Script Date: 4/8/2024 11:33:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

 --DROP TABLE [dbo].[BondInvoiceConsolidatorCharge]
CREATE TABLE [dbo].[BondInvoiceConsolidatorCharge](
	[BondInvoiceConsolidatorChargeID] [int] IDENTITY(1,1) NOT NULL,
	[BondInvoiceID] [int] NULL,
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
	[Subcommodity][VARCHAR](255)NULL,
	[SubcommodityID] [INT] NULL,
	[PackageType][VARCHAR](255)NULL,
	[UOM] [VARCHAR](255)NULL,
	[UOMID] [INT] NULL,
	[FromDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Weight] [decimal](10, 2) NULL,	
	[TariffHead] [varchar](255) NULL,
	[TariffHeadID] [int] NULL,
	[Qty] [decimal](10, 2) NULL,
	[Rate] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,	
	[trnDocumentID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[trnDocumentLotDetailsID][int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[BondInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_BondInvoiceConsolidatorCharge_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[BondInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_BondInvoiceConsolidatorCharge_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


