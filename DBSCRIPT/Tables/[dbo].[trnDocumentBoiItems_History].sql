USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnDocumentBoiItems]    Script Date: 01/11/2024 5:20:02 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.TABLES  where  TABLE_NAME='trnDocumentBoiItems_History')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnDocumentBoiItems_History]
END
GO
CREATE TABLE [dbo].[trnDocumentBoiItems_History](
	[trnDocumentBoiItems_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnDocumentBoiItemsID] [bigint] NOT NULL,
	[trnDocumentID] [bigint] NOT NULL,
	[trnDocumentLotDetailsID] [bigint] NOT NULL,
	[InvoiceNo] [varchar](255) NULL,
	[SerialNo] [varchar](255) NULL,
	[InvoiceDate] [datetime] NULL,
	[CargoName] [varchar](255) NULL,
	[NoOfPackages] [decimal](10, 2) NULL,
	[NoOfPieces] [decimal](10, 2) NULL,
	[Weight] [decimal](10, 2) NULL,
	[GuiID] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[Caption] [varchar](255)
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnDocumentBoiItems_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnDocumentBoiItems_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


