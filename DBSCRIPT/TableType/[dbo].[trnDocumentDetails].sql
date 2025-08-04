USE [CFS_BONDED_WAREHOUSE]
GO
--drop type [trnDocumentDetails

/****** Object:  UserDefinedTableType [dbo].[trnDocumentDetails]    Script Date: 4/8/2024 5:43:17 PM ******/
CREATE TYPE [dbo].[trnDocumentDetails] AS TABLE(
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
	[trnDocumentID] [int]NULL,
	[UOM] [varchar](255) NULL
)
GO


