USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[EmptyInvoiceConsolidateChargeDetails]    Script Date: 4/27/2024 4:32:56 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

--DROP TABLE [dbo].[EmptyInvoiceConsolidateChargeDetails]

CREATE TABLE [dbo].[EmptyInvoiceConsolidateChargeDetails](
	[EmptyInvoiceConsolidateChargeID] [bigint] IDENTITY(1,1) NOT NULL,
	[EmptyInvoiceID] [bigint] NOT NULL,	
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
	[trnEmptyContainerOutWOID][int]NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL	
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[EmptyInvoiceConsolidateChargeDetails] ADD  CONSTRAINT [DF_EmptyInvoiceConsolidateChargeDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[EmptyInvoiceConsolidateChargeDetails] ADD  CONSTRAINT [DF_EmptyInvoiceConsolidateChargeDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


