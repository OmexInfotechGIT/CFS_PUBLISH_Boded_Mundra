USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnContainerDestuffWorkOrderDetails]    Script Date: 1/2/2024 4:24:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnContainerDestuffWorkOrderDetails](
	[trnContainerDestuffWorkOrderDetailsID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnContainerDestuffWorkOrderID] [int] NOT NULL,
	[ContainerNo] [varchar](255) NULL,
	[trnContainerGateInDetailsID] [int] NULL,
	[Size] [int] NULL,
	[Type] [varchar](255) NULL,
	[CargoType] [varchar](1) NULL,
	[ContainerLevel] [varchar](1) NULL,
	[DestuffWOStatusTick] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrderDetails] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrderDetails] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


