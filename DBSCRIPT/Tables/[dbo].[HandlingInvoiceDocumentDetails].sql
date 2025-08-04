USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[HandlingInvoiceDocumentDetails]    Script Date: 01/08/2024 7:06:23 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HandlingInvoiceDocumentDetails](
	[HandlingInvoiceDocumentDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[HandlingInvoiceID] [int] NULL,
	[BatchID] [int] NULL,
	[ShiipingBillNo] [varchar](255) NULL,
	[ShipingBillDate] [datetime] NULL,
	[InvoiceNumber] [varchar](255) NULL,
	[InvoiceDate] [datetime] NULL,
	[LOTNO] [varchar](255) NULL,
	[BatchName] [varchar](255) NULL,
	[BULKSTATUS] [varchar](255) NULL,
	[CHA] [varchar](255) NULL,
	[Forwarder] [varchar](255) NULL,
	[CARGODESC] [varchar](255) NULL,
	[PACKAGETYPE] [varchar](255) NULL,
	[NOOFPKGS] [varchar](255) NULL,
	[NOOFPIECES] [varchar](255) NULL,
	[WEIGHT] [varchar](255) NULL,
	[TillPackages] [varchar](255) NULL,
	[TillPieces] [varchar](255) NULL,
	[TillWeight] [varchar](255) NULL,
	[AreaBooked] [varchar](255) NULL,
	[AdditionalAreaOccupied] [varchar](255) NULL,
	[ReleasedArea] [varchar](255) NULL,
	[TotalArea] [varchar](255) NULL,
	[trnDocumentLotdetailsID] [int] NULL,
	[trnDocumentID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[HandlingInvoiceDocumentDetails] ADD  CONSTRAINT [DF_HandlingInvoiceDocumentDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[HandlingInvoiceDocumentDetails] ADD  CONSTRAINT [DF_HandlingInvoiceDocumentDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


