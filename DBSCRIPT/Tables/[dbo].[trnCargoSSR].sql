USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnCargoSSR]    Script Date: 01/08/2024 5:19:08 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnCargoSSR](
	[trnCargoSSRID] [int] IDENTITY(1,1) NOT NULL,
	[SSRWONo] [varchar](50) NULL,
	[SSRWOdate] [datetime] NULL,
	[ManualSSRNo] [varchar](50) NOT NULL,
	[CycleID] [int] NULL,
	[CycleName] [varchar](50) NOT NULL,
	[trnDocumentIDID] [int] NULL,
	[trnDocumentNo] [varchar](255) NULL,
	[DOCDate] [datetime] NULL,
	[BatchNoID] [int] NULL,
	[BatchNo] [varchar](255) NULL,
	[FlagDeleted] [bit] NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedDate] [datetime] NULL,
	[SSRPrefix] [varchar](255) NULL,
	[CancelRemarks] [varchar](255) NULL,
	[IsFinished] [bit] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnCargoSSR] ADD  DEFAULT ((0)) FOR [FlagDeleted]
GO

ALTER TABLE [dbo].[trnCargoSSR] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnCargoSSR] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


