USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnEmptyContainerOutWO]    Script Date: 01/05/2024 6:47:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyContainerOutWO_History](
	[trnEmptyContainerOutWO_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnEmptyContainerOutWOID] [bigint] NOT NULL,
	[TransactionType] [varchar](50) NULL,
	[trnEmptyContainerOutWOPrefix] [varchar](20) NULL,
	[trnEmptyContainerOutWONo] [varchar](255) NULL,
	[trnDocumentNo] [varchar](255) NULL,
	[trnDocumentID] [bigint] NULL,
	[LocationTo] [varchar](255) NULL,
	[LocationToID] [int] NULL,
	[FRBundlingStatus] [varchar](50) NULL,
	[Bundle20] [int] NULL,
	[Bundle4045] [int] NULL,
	[LiftOnBy] [varchar](50) NULL,
	[LiftOffBy] [varchar](50) NULL,
	[TransportationBy] [varchar](50) NULL,
	[TransporterID] [int] NULL,
	[TransporterName] [varchar](255) NULL,
	[Remarks] [varchar](max) NULL,
	[IsEmptyGateOutprocess] [bit] NOT NULL,
	[YearID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[ContainerStatus] [varchar](255) NOT NULL,
	[Caption] [varchar](255) Null
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWO_History] ADD  DEFAULT ((0)) FOR [IsEmptyGateOutprocess]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWO_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWO_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWO_History] ADD  DEFAULT ('REGULAR') FOR [ContainerStatus]
GO


