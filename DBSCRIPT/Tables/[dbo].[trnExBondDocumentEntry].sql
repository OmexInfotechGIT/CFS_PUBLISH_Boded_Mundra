USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExBondDocumentEntry]    Script Date: 01/03/2024 10:03:55 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[trnExBondDocumentEntry](
	[trnExBondDocumentEntryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExBondDocumentEntryPrefix] [varchar](20) NULL,
	[trnExBondDocumentEntryNo] [varchar](255) NULL,
	[InBOENo] [varchar](255) NULL,
	[trnDocumentLotDetailsID] [int] NULL,
	[InBOEDate] [datetime] NOT NULL,
	[IGMNO] [varchar](255) NULL,
	[ItemNo] [varchar](255) NULL,
	[CPStatus] [bit] NULL,
	[CPORBondNo] [varchar](255) NULL,
	[CPORBondExpiryDate] [datetime] NULL,
	[NOCValidDate] [datetime] NULL,
	[Status] [char](1) NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID][bigint] NULL,
	[InBondConsoler] [varchar](255) NULL,
	[InBondConsolerID][bigint] NULL,
	[CargoDescription] [varchar](255) NULL,
	[InBondBOEPackages] [decimal](18,2) NULL,
	[InBondBOEPieces] [decimal](18,2) NULL,
	[InBondBOEWeight] [decimal](18,2) NULL,
	[InBondCHA] [varchar](255) NULL,
	[InBondCHAID][bigint] NULL,
	[InBondForwarder] [varchar](255) NULL,
	[InBondForwarderID][bigint] NULL,
	[InBondImporter] [varchar](255) NULL,
	[InBondImporterID][bigint] NULL,
	[Remarks] [varchar](max) NULL,
	[BULKSTATUS] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsFinished] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntry] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntry] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnExBondDocumentEntry] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


