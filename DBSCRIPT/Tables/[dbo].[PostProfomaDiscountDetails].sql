USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[PostProfomaDiscountDetails]    Script Date: 01/09/2024 9:56:34 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PostProfomaDiscountDetails](
	[PostProfomaDiscountDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[PostProfomaID] [bigint] NULL,
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

ALTER TABLE [dbo].[PostProfomaDiscountDetails] ADD  CONSTRAINT [DF_PostProfomaDiscountDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[PostProfomaDiscountDetails] ADD  CONSTRAINT [DF_PostProfomaDiscountDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


