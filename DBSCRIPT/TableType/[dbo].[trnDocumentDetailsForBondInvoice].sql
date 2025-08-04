USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  UserDefinedTableType [dbo].[trnDocumentDetailsForBondInvoice]    Script Date: 5/31/2024 11:58:07 AM ******/
CREATE TYPE [dbo].[trnDocumentDetailsForBondInvoice] AS TABLE(	
	[BOENo] [varchar](255) NULL,
	[BOEDate] [datetime] NULL,
	[BondNo][VARCHAR](255)NULL,
	[BondDate][DATETIME]NULL,
	[CPNo] [varchar](255) NULL,
	[CPDate] [datetime] NULL,
	[BLNo] [varchar](255) NULL,
	[BLDate] [datetime] NULL,
	[IGMNo] [varchar](255) NULL,
	[ItemNo] [varchar](255) NULL,
	[HoldStatus] [varchar](255) NULL,
	[AV] [varchar](255) NULL,
	[EnhancedAV] [varchar](255) NULL,
	[DV] [varchar](255) NULL,
	[EnhancedDV] [varchar](255) NULL,
	[CHA] [varchar](255) NULL,
	[Forwarder] [varchar](255) NULL,	
	[Importer] [varchar](255) NULL,
	[NOOFPKGS] decimal (18,2) NULL,
	[NOOFPIECES] decimal (18,2) NULL,
	[WEIGHT] decimal (18,2) NULL,
	[PACKAGETYPE] [varchar](255) NULL,
	[CARGODESC] [varchar](255) NULL,
	[BULKSTATUS] [varchar](255) NULL,	
	[trnDocumentLotdetailsID] [int] NULL,
	[trnDocumentID] [int] NULL,
	[UOM] [varchar](255) NULL
)
GO


