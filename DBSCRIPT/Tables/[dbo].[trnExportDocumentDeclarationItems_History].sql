USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportDocumentDeclarationItems_History]    Script Date: 1/10/2024 11:11:50 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportDocumentDeclarationItems_History')
BEGIN
 DROP TABLE trnExportDocumentDeclarationItems_History
END
GO

IF  NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportDocumentDeclarationItems_History')
BEGIN
CREATE TABLE [dbo].[trnExportDocumentDeclarationItems_History](
	[trnExportDocumentDeclarationItems_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportDocumentDeclarationItemsID] [bigint] NOT NULL,
	[trnExportDocumentDeclarationID] [bigint] NOT NULL,
	[trnExportDocumentDeclarationLotDetailsID] [bigint] NOT NULL,
	[trnDocumentLotDetailsID] [bigint] NOT NULL,
	[CargoName] [varchar](255) NULL,
	[CargoDesc] [varchar](255) NULL,
	[NoOfPackages] [decimal](10, 2) NULL,
	[NoOfPieces] [decimal](10, 2) NULL,
	[Weight] [decimal](10, 2) NULL,
	[WHLocation] [varchar](255) NULL,
	[WHLocationID] [int] NULL,
	[trnDocumentBoiItemsID] [varchar](255) NULL,
	[AreaRequired] [decimal](10, 2) NULL,
	[Flagdeleted] [bit] NOT NULL DEFAULT ((0)),
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL DEFAULT ([dbo].[GetCurrentDateTime]()),
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]


END
GO

