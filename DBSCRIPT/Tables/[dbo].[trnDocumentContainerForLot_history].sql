USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnDocumentContainerForLot_history]    Script Date: 01/11/2024 5:25:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.TABLES  where  TABLE_NAME='trnDocumentContainerForLot_history')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnDocumentContainerForLot_history]
END
GO
CREATE TABLE [dbo].[trnDocumentContainerForLot_history](
	[trnDocumentContainerForLot_historyID] [int] IDENTITY(1,1) NOT NULL,
	[trnDocumentContainerForLotID] [int]  NOT NULL,
	[trnDocumentLotDetailsID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[trnDocumentID] [int] NULL,
	[LotNo] [varchar](255) NULL,
	[ContLevel] [varchar](255) NULL,
	[Packages] [decimal](10, 2) NULL,
	[Pieces] [decimal](10, 2) NULL,
	[Weight] [decimal](10, 2) NULL,
	[GuiID] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnDocumentContainerForLot_history] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnDocumentContainerForLot_history] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


