USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportDocumentDeclarationItems]    Script Date: 01/08/2024 5:46:09 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnExportDocumentDeclarationItems](
	[trnExportDocumentDeclarationItemsID] [bigint] IDENTITY(1,1) NOT NULL,
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
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclarationItems] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportDocumentDeclarationItems] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


