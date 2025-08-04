USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnLoadedContainerOutWODetails_History]    Script Date: 01/10/2024 1:32:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnLoadedContainerOutWODetails_History](
	[trnLoadedContainerOutWODetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnLoadedContainerOutWODetailsID] [bigint] NOT NULL,
	[trnLoadedContainerOutWOID] [int] NULL,
	[ContNo] [varchar](255) NOT NULL,
	[trnDocumentContainerID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[caption] [varchar](255) NULL
) ON [PRIMARY]
GO


