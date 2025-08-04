USE CFS_BONDED_WAREHOUSE
GO

/****** Object:  Table [dbo].[trnEmptyContainerGateInDetails]    Script Date: 1/11/2024 4:46:01 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyContainerGateInDetails](
	[trnEmptyContainerGateInDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnEmptyContainerGateInID] [bigint] NULL,
	[ContainerNumber] [varchar](255) NULL,
	[trnEmptyContainerInWOContainerDetailsID] [bigint] NULL,
	[ISOCode] [varchar](255) NULL,
	[ISOCodeID] [bigint] NULL,
	[WOISOCodeSize] [varchar](255) NULL,
	[WOISOCodeType] [varchar](255) NULL,
	[GrossWeight] [decimal](10, 2) NULL,
	[TareWeight] [decimal](10, 2) NULL,
	[Condition] [varchar](255) NULL,
	[ConditionRemarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[WOISOCode] [varchar](50) NULL,
	[DeleteRemarks] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateInDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyContainerGateInDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


