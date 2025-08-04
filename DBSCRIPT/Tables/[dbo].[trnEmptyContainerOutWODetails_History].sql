USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnEmptyContainerOutWOGWDetails]    Script Date: 01/05/2024 6:49:22 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnEmptyContainerOutWODetails_History](
	[trnEmptyContainerOutWODetails_HistoryID] [int] IDENTITY(1,1) NOT NULL,
	[trnEmptyContainerOutWODetailsID] [int] NULL,
	[trnEmptyContainerOutWOID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[trncontainerDestuffingID] [int] NULL,
	[trnContainerGateInDetailsID] [int] NULL,
	[ContainerNumber] [varchar](255) NULL,
	[ISOCode] [varchar](255) NULL,
	[ISOCodeSize] [varchar](255) NULL,
	[ISOCodeType] [varchar](255) NULL,
	[GateInDate] [datetime] NULL,
	[GateOutDate] [datetime] NULL,
	[ISCanceled] [bit] NOT NULL,
	[CancelRemarks] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[CreatedBy] [bigint] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) Null
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWODetails_History] ADD  DEFAULT ((0)) FOR [ISCanceled]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWODetails_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnEmptyContainerOutWODetails_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


