USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[HandlingInvoiceDiscountDetails]    Script Date: 01/08/2024 7:11:29 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HandlingInvoiceDiscountDetails](
	[HandlingInvoiceDiscountDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[HandlingInvoiceID] [bigint] NULL,
	[trnDocumentID] [bigint] NULL,
	[TariffHeadID] [bigint] NULL,
	[TariffHead] [varchar](255) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[NetTaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[YearID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[HandlingInvoiceDiscountDetails] ADD  CONSTRAINT [DF_HandlingInvoiceDiscountDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[HandlingInvoiceDiscountDetails] ADD  CONSTRAINT [DF_HandlingInvoiceDiscountDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


