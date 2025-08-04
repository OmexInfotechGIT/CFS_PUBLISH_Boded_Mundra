USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[PostProfomaDocumentDetails]    Script Date: 01/09/2024 9:53:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PostProfomaDocumentDetails](
	[PostProfomaDocumentDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[PostProfomaID] [int] NULL,
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
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[PostProfomaDocumentDetails] ADD  CONSTRAINT [DF_PostProfomaDocumentDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[PostProfomaDocumentDetails] ADD  CONSTRAINT [DF_PostProfomaDocumentDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


