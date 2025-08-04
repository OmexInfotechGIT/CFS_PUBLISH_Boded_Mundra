USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnContainerDestuffWorkOrderDetails_History]    Script Date: 1/2/2024 4:23:23 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnContainerDestuffWorkOrderDetails_History](
	[trnContainerDestuffWorkOrderDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnContainerDestuffWorkOrderDetailsID] [bigint] NOT NULL,
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
	[UpdatedDate] [datetime] NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnContainerDestuffWorkOrderDetails_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO


