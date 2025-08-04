USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnContainerSSR]    Script Date: 01/08/2024 5:20:33 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnContainerSSR](
	[trnContainerSSRID] [bigint] IDENTITY(1,1) NOT NULL,
	[SSRNo] [varchar](50) NULL,
	[trnDocumentNo] [varchar](255) NULL,
	[trnDocumentID] [bigint] NOT NULL,
	[SSRWONo] [bigint] NULL,
	[CycleName] [varchar](50) NULL,
	[NOCDate] [varchar](255) NULL,
	[BatchNoID] [int] NULL,
	[BatchNo] [varchar](255) NULL,
	[Remarks] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[CycleID] [int] NULL,
	[IsFinished] [bit] NULL,
	[SSRPrefix] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnContainerSSR] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnContainerSSR] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnContainerSSR] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


