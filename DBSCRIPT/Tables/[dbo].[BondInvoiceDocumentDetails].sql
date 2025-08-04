USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[BondInvoiceDocumentDetails]    Script Date: 4/8/2024 5:22:19 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[BondInvoiceDocumentDetails](
	[BondInvoiceDocumentDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[BondInvoiceID] [int] NULL,	
	[IGMNo] [varchar](255) NULL,
	[IGMDate] [datetime] NULL,
	[BOENo] [varchar](255) NULL,
	[BOEDate] [datetime] NULL,
	[ItemNo] [varchar](255) NULL,	
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

ALTER TABLE [dbo].[BondInvoiceDocumentDetails] ADD  CONSTRAINT [DF_BondInvoiceDocumentDetails_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[BondInvoiceDocumentDetails] ADD  CONSTRAINT [DF_BondInvoiceDocumentDetails_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


