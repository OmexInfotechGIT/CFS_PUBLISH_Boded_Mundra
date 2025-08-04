USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnEmptyContainerOutGatePassDetails_History]    Script Date: 01/08/2024 6:04:50 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyContainerOutGatePassDetails_History](
	[trnEmptyContainerOutGatePassDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnEmptyContainerOutGatePassDetailsID] [bigint]  NOT NULL,
	[trnEmptyContainerOutGatePassID] [int] NULL,
	[trnEmptyTruckGateInEmptyID] [int] NULL,
	[ContNo] [varchar](255) NULL,
	[Condition] [varchar](255) NULL,
	[ConditionRemarks] [varchar](max) NULL,
	[MovetoLocationID] [int] NULL,
	[MovetoLocation] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePassDetails_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutGatePassDetails_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


