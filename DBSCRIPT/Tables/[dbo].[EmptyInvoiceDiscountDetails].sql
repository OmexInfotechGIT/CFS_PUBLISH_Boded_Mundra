USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[EmptyInvoiceDiscountDetails]    Script Date: 4/27/2024 4:33:01 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
--DROP TABLE [dbo].[EmptyInvoiceDiscountDetails]
CREATE TABLE [dbo].[EmptyInvoiceDiscountDetails](
	[EmptyInvoiceDiscountDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[EmptyInvoiceID] [bigint] NOT NULL,
	[Qty] [int] NULL,
	[Rate] [money] NULL,
	[Discount] [money] NULL,
	[TaxableAmount] [money] NULL,
	[GST] [money] NULL,
	[GSTAmount] [money] NULL,
	[TotalAmount] [money] NULL,
	[MstrTariffHeadID] [int] NULL,
	[MSTRTariffHeadName] [varchar](255) NULL,
	[StateID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[NetTaxableAmount] [money] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmptyInvoiceDiscountDetails] ADD  CONSTRAINT [DF_EmptyInvoiceDiscountDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[EmptyInvoiceDiscountDetails] ADD  CONSTRAINT [DF_EmptyInvoiceDiscountDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


