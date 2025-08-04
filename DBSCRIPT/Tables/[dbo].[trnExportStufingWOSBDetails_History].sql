USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportStufingWOSBDetails_History]    Script Date: 1/16/2024 10:12:49 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportStufingWOSBDetails_History')
BEGIN
 DROP TABLE trnExportStufingWOSBDetails_History
END
GO

CREATE TABLE [dbo].[trnExportStufingWOSBDetails_History](
	[trnExportStufingWOSBDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportStufingWOSBDetailsID] [int] NULL,
	[trnExportStufingWOID] [int] NULL,
	[BOENo] [varchar](max) NOT NULL,
	[trnExportDocumentDeclarationLotDetailsID] [int] NULL,
	[NOOFPKGS] [decimal](18, 0) NULL,
	[NOOFPIECES] [decimal](18, 0) NULL,
	[WEIGHT] [decimal](18, 0) NULL,
	[FOB] [varchar](max) NULL,
	[POD] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL,
	[BLNo] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


