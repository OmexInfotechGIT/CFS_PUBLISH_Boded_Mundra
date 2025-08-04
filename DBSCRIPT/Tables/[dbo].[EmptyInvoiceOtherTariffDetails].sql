
USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[EmptyInvoiceOtherTariffDetails]    Script Date: 01/10/2024 4:05:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EmptyInvoiceOtherTariffDetails](
	[EmptyInvoiceOtherTariffDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[EmptyInvoiceID] [int] NULL,
	[TariffHead] [varchar](255) NULL,
	[TariffHeadID] [int] NULL,
	[QTY] [decimal](10, 2) NOT NULL,
	[Rate] [decimal](10, 2) NOT NULL,
	[Total] [decimal](10, 2) NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[Discountamt] [decimal](10, 2) NOT NULL,
	[Netamount] [decimal](10, 2) NOT NULL,
	[GSTPer] [decimal](10, 2) NOT NULL,
	[IsFinished] [bit] NOT NULL,
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  CONSTRAINT [DF_EmptyInvoiceOtherTariffDetails_QTY]  DEFAULT ((0)) FOR [QTY]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  CONSTRAINT [DF_EmptyInvoiceOtherTariffDetails_Rate]  DEFAULT ((0)) FOR [Rate]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  CONSTRAINT [DF_EmptyInvoiceOtherTariffDetails_Total]  DEFAULT ((0)) FOR [Total]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  CONSTRAINT [DF_EmptyInvoiceOtherTariffDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  CONSTRAINT [DF_EmptyInvoiceOtherTariffDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  DEFAULT ((0)) FOR [Discountamt]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  DEFAULT ((0)) FOR [Netamount]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  DEFAULT ((0)) FOR [GSTPer]
GO

ALTER TABLE [dbo].[EmptyInvoiceOtherTariffDetails] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


